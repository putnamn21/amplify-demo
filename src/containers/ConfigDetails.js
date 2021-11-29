import {
    Text,
    View
} from '@aws-amplify/ui-react'

export default function ConfigDetails({
    name,
    active,
    startDate,
    endDate,
    weeklyWaterAmount,
    daySettings,
    zones
}){
    return(
        <View padding="1rem">
            <Text>Active: {active ? "Yes": "No"}</Text>
            <Text>Start Date: {startDate}</Text>
            <Text>End Date: {endDate}</Text>
            <Text>Weekly Amount: {weeklyWaterAmount}</Text>
        </View>
    )
}