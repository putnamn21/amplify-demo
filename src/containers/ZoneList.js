import { useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import _pick from 'lodash/pick'
import _sortBy from 'lodash/sortBy'
import { listZones } from '../graphql/queries'
import {
    createZone,
    updateZone,
    deleteZone
} from '../graphql/mutations'
import {
    Button,
    Flex,
    Heading,
    Loader
} from '@aws-amplify/ui-react'
import FetchData from '../components/FetchData'
import ZoneForm from './ZoneForm'

const ZoneListContent = ({ data, refresh }) => {

    const currentZones = _sortBy((data.data?.listZones?.items || []), 'zoneNumber')
    const [zones, updateZones] = useState(currentZones)
    const isNew = zone => zone.id.startsWith('__')

    const handleCreateZone = () => {
        updateZones(zones.concat({
            id: `__${zones.length}`,
            zoneNumber: zones.length + 1,
            name: '',
            description: ''
        }))
    }
    const handleDeleteZone = async () => {
        const lastZone = zones.pop()
        if (isNew(lastZone)) {
            updateZones([...zones])
        } else {
            try {
                await API.graphql(graphqlOperation(deleteZone, {
                    input: { id: lastZone.id }
                }))
                updateZones([...zones])
            } catch (e) {
                console.log(e)
                updateZones(zones.concat(lastZone))
            }
        }
    }

    const handleAddUpdate = (method, parseResponse) => async (zone) => {
        try {
            const input = _pick(zone, [
                'zoneNumber',
                'name',
                'description'
            ].concat(isNew(zone) ? [] : 'id'))
            //let AWS auto assign an ID if 
            const response = await API.graphql(graphqlOperation(method, { input }))
            //replace obj in state
            const index = zones.findIndex(({ id }) => id === zone.id)
            zones.splice(index, 1, parseResponse(response))
            updateZones([...zones])
        } catch (e) {
            console.log(e)
        }
    }

    const handleSaveZone = handleAddUpdate(createZone, response => response.data.createZone)
    const handleUpdateZone = handleAddUpdate(updateZone, response => response.data.updateZone)

    return (<>
        <Flex wrap="wrap">
            {zones.map((zone) =>
                <ZoneForm
                    key={zone.id}
                    isNew={isNew(zone)}
                    zone={zone}
                    handleSaveZone={handleSaveZone}
                    handleUpdateZone={handleUpdateZone}
                />)}
        </Flex>
        <Flex margin="1rem 0 0">
            <Button onClick={handleCreateZone}>Add Zone</Button>
            {!!zones.length && <Button onClick={handleDeleteZone}>Remove Zone</Button>}
        </Flex>
    </>)
}

export default function ZoneList() {
    return (
        <>
            <Heading level={4} margin="0 0 1em">Zones</Heading>
            <FetchData
                graphQLMethod={listZones}
                LoaderComponent={() => <Loader variation="linear" />}
                ErrorComponent={({ error }) => `Error: ${error.message}`}>
                {(props) => <ZoneListContent {...props} />}
            </FetchData>
        </>
    )
}
