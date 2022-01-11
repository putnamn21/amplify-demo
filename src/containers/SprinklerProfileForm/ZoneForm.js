import { useForm, useFieldArray } from "react-hook-form";
import {
    TextField,
    CheckboxField,
    Button,
    Flex,
    Heading,
    Loader,
    Divider,
    View
} from '@aws-amplify/ui-react'
import _sortBy from 'lodash/sortBy'

import FetchData from '../../components/FetchData'
import { listZones } from "../../graphql/queries";

function DayFormContent({zoneSettings, daySettings, dispatch, navigate}){

    const onSubmit = data => {
        dispatch({
            type: 'zone_settings_update',
            payload: data
        })
    }

    const { register, handleSubmit, formState: {errors}, control, watch } = useForm({
        defaultValues: {
            zoneSettings
        }
    })
        
    const { fields } = useFieldArray({
        control,
        name: "zoneSettings"
    })

    return (
        <Flex as="form" direction="column" maxWidth="100vw" width="20rem" onSubmit={handleSubmit(onSubmit)}> 
            {fields.map((field, index)=> {

                const active = watch(`zoneSettings.${index}.active`)

                return (
                    <Flex as="section" direction="column" key={field.zone.zoneNumber}>
                        <Flex justifyContent="space-between" alignContent="center">
                            <Heading 
                                color={active ? 'var(--amplify-components-heading-color)': 'var(--amplify-grey)' } 
                                level={active ? 5 : 6}>
                                    {field.zone.zoneNumber} - {field.zone.name}
                            </Heading>
                            <Flex wrap="nowrap" alignContent="center">
                                <CheckboxField label="Active" {...register(`zoneSettings.${index}.active`)} />
                            </Flex>
                        </Flex>
                        {active && 
                            <>
                                <TextField 
                                    label="Run Minutes" 
                                    type="number"
                                    hasError={!!errors.zoneSettings?.[index]?.runMinutes}
                                    errorMessage="Must be a whole number."
                                    {...register(`zoneSettings.${index}.runMinutes`, {
                                        required: 'This field is required',
                                        valueAsNumber: true,
                                        validate: Number.isInteger
                                    })}
                                />
                                    <TextField 
                                    label="Run Cycles" 
                                    type="number"
                                    hasError={!!errors.zoneSettings?.[index]?.runCycles}
                                    errorMessage="Must be a whole number."
                                    {...register(`zoneSettings.${index}.runCycles`, {
                                        required: 'This field is required',
                                        valueAsNumber: true,
                                        validate: Number.isInteger
                                    })}
                                />
                                <TextField 
                                    label="Targeted Water Amount (inches)" 
                                    type="number"
                                    step="0.1"
                                    hasError={!!errors.zoneSettings?.[index]?.targetInches}
                                    errorMessage="This field is required."
                                    {...register(`zoneSettings.${index}.targetInches`, {
                                        required: 'This field is required',
                                        valueAsNumber: true
                                    })}
                                />
                                <TextField 
                                    label="Targeted Water Amount Timeframe (hours)" 
                                    type="number"
                                    hasError={!!errors.zoneSettings?.[index]?.targetTimeframeHours}
                                    errorMessage="Must be a whole number."
                                    {...register(`zoneSettings.${index}.targetTimeframeHours`, {
                                        required: 'This field is required',
                                        valueAsNumber: true,
                                        validate: Number.isInteger
                                    })}
                                />
                            </>
                        }
                        <Divider/>
                    </Flex>
                )
            })}
            <Button type="submit">Save All</Button>
        </Flex>
    )
}

export default function DayForm({store, dispatch, navigate}){
    return(
        <>
            <Heading level={3}>Zone Settings</Heading>
            {store.zoneSettings.length 
                ? <DayFormContent 
                    zoneSettings={store.zoneSettings}
                    daySettings={store.daySettings}
                    dispatch={dispatch}
                    navigate={navigate}/>
                : <FetchData
                    graphQLMethod={listZones}
                    LoaderComponent={() => <View width="20rem"><Loader variation="linear" /></View>}
                    ErrorComponent={({ error }) => `Error: ${error.message}`}>
                        {({data}) => 
                            <DayFormContent
                                zoneSettings={_sortBy((data.data?.listZones?.items || []), 'zoneNumber').map(zone => ({
                                    zone,
                                    active: false,
                                    runMinutes: 0,
                                    runCycles: 0,
                                    targetInches: 0,
                                    targetTimeFrameHours: 0,
                                    daySettings: []
                                }))}
                                daySettings={store.daySettings}
                                dispatch={dispatch}
                                navigate={navigate}/>
                        }
                </FetchData>}
        </>
    )
}