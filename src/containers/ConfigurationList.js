import {
    useState,
    useEffect
} from 'react'

import {
    Flex,
    Expander,
    ExpanderItem,
} from "@aws-amplify/ui-react"

import ConfigExpansionPanel 
    from './ConfigDetails'

const dFetchState = {
    loading: false,
    success: false,
    error: null
}
const configurationsList = [{
    id: 1,
    name: 'Normal Summer',
    active: true,
    startDate: '5-15',
    endDate: '10-31',
    weeklyWaterAmount: 1.0,
    daySettings:[],
    zones: [],
    userId: ''
},{
    id: 2,
    name: 'New Grass',
    active: false,
    startDate: '5-15',
    endDate: '10-31',
    weeklyWaterAmount: 2.0,
    daySettings:[],
    zones: [],
    userId: ''
}]

export default function ConfigurationList({
    user
}){

    const [configurations, setConfigurations] = useState([])
    const [{
        loading,
        success,
        error
    }, setFetchState] = useState({...dFetchState,loading: true})

    useEffect(() => {
        setTimeout(() => {
            setConfigurations(configurationsList)
            setFetchState({...dFetchState, success: true})
        }, 500)
    }, [dFetchState.loading])

    return (
        loading ? 
            "... Loading"
            : success ? 
            <Expander type="multiple">
                {configurations.map((config) => 
                    <ExpanderItem value={config.id} key={config.id} title={
                        <Flex flex="1" justifyContent="space-between" alignItems="center" padding="0 1rem 0 0">
                            <span>{config.name}</span>
                            <Flex alignItems="center" columnGap="0.25rem">
                                <svg height="1em" width="1em">
                                     <circle cx="0.5em" cy="0.5em" r="0.5em" strokeWidth="0" fill={config.active ? "green" : "var(--amplify-red)"} />
                                </svg>
                                <span>{config.active ? "Active" : "Disabled"}</span> 
                            </Flex>
                            
                        </Flex>
                        
                    }>
                        <ConfigExpansionPanel {...config}/>
                    </ExpanderItem>
                )}
            </Expander>
            : `Error: ${error.message}`       
    )
}