import {
    useState,
    useEffect
} from 'react'

import { API, graphqlOperation } from 'aws-amplify'
import {listSprinklerProfiles } from '../graphql/queries'

import {
    Flex,
    Expander,
    ExpanderItem,
    Text
} from "@aws-amplify/ui-react"

import ProfileDetails 
    from './ProfileDetails'

const dFetchState = {
    loading: false,
    success: false,
    error: null
}

export default function ConfigurationList({
    user
}){

    const [profiles, setProfiles] = useState([])
    const [{
        loading,
        success,
        error
    }, setFetchState] = useState({...dFetchState,loading: true})

    useEffect(()=>{fetchProfiles()}, [])

    async function fetchProfiles(){
        try {
            const profileData = await API.graphql(graphqlOperation(listSprinklerProfiles))
            console.log(profileData)
            const profiles = profileData.data.listSprinklerProfiles.items
            setProfiles(profiles)
            setFetchState({...dFetchState, success: true})
        } catch(err){
            setFetchState({...dFetchState, error: err})
        }
    }

    return (
        loading ? 
            "... Loading"
            : success ?
            <>
                {!profiles.length && <Text>No profiles have been initialized</Text>}
                <Expander type="multiple">
                    {profiles.map((profile) => 
                        <ExpanderItem value={profile.id} key={profile.id} title={
                            <Flex flex="1" justifyContent="space-between" alignItems="center" padding="0 1rem 0 0">
                                <span>{profile.name}</span>
                                <Flex alignItems="center" columnGap="0.25rem">
                                    <svg height="1em" width="1em">
                                        <circle cx="0.5em" cy="0.5em" r="0.5em" strokeWidth="0" fill={profile.active ? "green" : "var(--amplify-red)"} />
                                    </svg>
                                    <span>{profile.active ? "Active" : "Disabled"}</span> 
                                </Flex>
                            </Flex>
                            
                        }>
                            <ProfileDetails {...profile}/>
                        </ExpanderItem>
                    )}
                </Expander>
            </>     
            : `Error: ${error.message}`       
    )
}