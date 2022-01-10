import { useForm, useFieldArray } from "react-hook-form";
import {
    TextField,
    CheckboxField,
    Button,
    Flex,
    Heading,
} from '@aws-amplify/ui-react'

import {DAYS} from '../../constants'

export default function DayForm({store, dispatch, navigate}){
   
    const { register, handleSubmit, formState: {errors}, control, watch } = useForm({
        defaultValues: {
            daySettings: store.daySettings
        }
    })

    const { fields } = useFieldArray({
        control,
        name: "daySettings"
    })

    const onSubmit = data => {
        dispatch({
            type: 'day_settings_update',
            payload: data
        })
        navigate('zones')
    }

    console.log(errors)

    return (
         <Flex as="form" onSubmit={handleSubmit(onSubmit)} wrap="wrap">
            <Flex flex="1 1 25rem" direction="column" >
                <Heading level={3}>Days Settings</Heading>
                {fields.map((field, index)=>{
                    //doesnt change so safe referencing the day here
                    const day = DAYS[field.day]
                    //does change so need hook
                    const active = watch(`daySettings.${index}.active`)

                    return (
                         <Flex as="section" direction="column" key={field.day}>
                            <Flex justifyContent="space-between" alignContent="center">
                                <Heading 
                                    color={active ? 'var(--amplify-components-heading-color)': 'var(--amplify-grey)' } 
                                    level={6}>
                                        {day}
                                </Heading>
                                <Flex wrap="nowrap" alignContent="center">
                                    <CheckboxField label="Active" {...register(`daySettings.${index}.active`)} />
                                </Flex>
                            </Flex>
                            {active && 
                                <Flex alignItems="flex-start" width="100%">
                                    <TextField 
                                        label="Start Time" 
                                        hasError={!!errors.daySettings?.[index]?.startTime}
                                        errorMessage="Must be a whole number between 0 and 24."
                                        descriptiveText="24 hour clock format"
                                        {...register(`daySettings.${index}.startTime`, {
                                            required: 'This field is required',
                                            valueAsNumber: true,
                                            max: 24,
                                            validate: Number.isInteger
                                        })}
                                    />
                                </Flex>
                            }
                            
                        </Flex>
                    )
                })}
            </Flex>
            <Flex flex="1 1 100%" minWidth="100%">
                <Button type="submit">Next</Button>
            </Flex>
        </Flex>
    )
}