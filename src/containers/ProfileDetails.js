import {
    Text,
    View
} from '@aws-amplify/ui-react'

export default function ConfigDetails({
    name,
    active,
    weeklyWaterAmount,
    daySettings,
    zoneSettings
}){
    return(
        <View padding="1rem">
            <Text>Active: {active ? "Yes": "No"}</Text>
            <Text>Weekly Amount: {weeklyWaterAmount}</Text>
        </View>
    )
}