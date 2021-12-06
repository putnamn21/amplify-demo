import { useNavigate } from 'react-router-dom'
import { listSprinklerProfiles } from '../graphql/queries'
import FetchData from '../components/FetchData'
import {
    Flex,
    Expander,
    ExpanderItem,
    Text,
    Button,
    Loader,
    Heading
} from "@aws-amplify/ui-react"

import ProfileDetails
    from './ProfileDetails'

export default function ProfileList() {
    const navigate = useNavigate()
    return (
        <>
            <Flex margin="0 0 1rem">
                <Button onClick={() => navigate('/AddSprinklerProfile')}>
                    Add Sprinkler Profile
                </Button>
                <Button onClick={() => navigate('/ManageZones')}>
                    Add Zone
                </Button>
            </Flex>
            <Heading level={3}>Sprinker Profiles</Heading>
            <FetchData
                graphQLMethod={listSprinklerProfiles}
                LoaderComponent={() => <Loader variation="linear" />}
                ErrorComponent={({ error }) => `Error: ${error.message}`}>
                {({ data, refresh }) => {
                    return (
                        <>
                            {!data.data.listSprinklerProfiles.items.length && <Text>No profiles have been initialized</Text>}
                            <Expander type="multiple">
                                {data.data.listSprinklerProfiles.items.map((profile) =>
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
                                        <ProfileDetails {...profile} />
                                    </ExpanderItem>
                                )}
                            </Expander>
                        </>
                    )
                }}
            </FetchData>
        </>
    )
}