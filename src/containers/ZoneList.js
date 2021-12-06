import { useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
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

    const currentZones = data.data?.listZones?.items || []
    const [zones, updateZones] = useState(currentZones)

    const handleCreateZone = () => {
        updateZones(zones.concat({
            id: `__${zones.length + 1}`,
            zoneNumber: zones.length,
            name: '',
            description: ''
        }))
    }
    const handleDeleteZone = async () => {
        const lastZone = zones.pop()
        //Yet to be saved Zone
        if (lastZone.id.startsWith('__')) {
            updateZones(zones)
        } else {
            try {
                await API.graphql(graphqlOperation(deleteZone, {
                    id: lastZone.id
                }))
                updateZones(zones)
            } catch (e) {
                console.log(e)
                updateZones(zones.concat(lastZone))
            }
        }
    }

    const handleSaveZone = async (zone) => {

    }
    const handleUpdateZone = async (zone) => {

    }

    return (<>
        <Flex wrap="wrap">
            {zones.map((zone) => <ZoneForm key={zone.id} zone={zone} />)}
        </Flex>
        <Flex margin="1rem 0 0">
            <Button onClick={handleCreateZone}>Add Zone</Button>
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
