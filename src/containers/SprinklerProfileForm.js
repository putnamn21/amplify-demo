
import { useEffect } from 'react'
import { useForm, useFieldArray } from "react-hook-form";
import { DAYS } from '../constants'
import {
    TextField,
    CheckboxField,
    SelectField,
    Button,
    Flex,
    Heading,
    Divider
} from '@aws-amplify/ui-react'

export default function SprinklerProfileForm() {

    const { register, handleSubmit, formState: { errors }, control, watch, getValues, resetField } = useForm()
    const { fields, append, remove, } = useFieldArray({
        control,
        name: "daySettings"
    })

    //remove day from options if its already a day setting

    const dayOptions = Object.entries(DAYS).filter(([day]) => !watch('daySettings', []).map(({ day }) => day).includes(day))
    const firstOption = dayOptions.length && dayOptions[0][0]

    const addDayConfiguration = () => {
        const day = getValues('_dayPreset')
        append({
            day,
            active: false,
            startTime: ''
        })
    }

    useEffect(() => {
        resetField('_dayPreset', {
            defaultValue: firstOption
        })
    }, [firstOption, resetField])

    const onSubmit = data => console.log(data)

    return (
        <Flex as="form" onSubmit={handleSubmit(onSubmit)} wrap="wrap">
            <Flex flex="1 1 16rem" direction="column" >
                <Heading level={3}>Profile Settings</Heading>
                <TextField label="Name" {...register("name", { required: true })} />
                <CheckboxField label="Active" {...register("active")} />
                <TextField label="Tageted Weekly Water Amount (inches)" type="number" {...register("weeklyWaterAmount")} />
            </Flex>
            <Flex flex="1 1 16rem" direction="column">
                <Heading level={4}>Day Settings</Heading>
                {fields.map((field, index) => {

                    const day = DAYS[getValues(`daySettings.${index}.day`)]

                    return (
                        <Flex as="section" direction="column" key={field.id}>
                            <Flex justifyContent="space-between" alignContent="center">
                                <Heading level={5}>{day} <TextField {...register("day")} type="hidden" /></Heading>
                                <Flex wrap="nowrap" alignContent="center">
                                    <CheckboxField label="Active" {...register(`daySettings.${index}.active`)} />
                                    <Button size="small" onClick={() => remove(index)}>Delete</Button>
                                </Flex>
                            </Flex>
                            <Flex alignItems="flex-start" width="100%">
                                <TextField label="Start Time" {...register(`daySettings.${index}.startTime`)} />
                                <TextField label="Number of Cycles" {...register(`daySettings.${index}.numberOfCycles`)} type="number" />
                                <TextField label="Time Between Cycles" {...register(`daySettings.${index}.timeBetweenCycles`)} type="number" />
                            </Flex>
                            <Divider />
                        </Flex>
                    )
                })}
                {/* Once we reach 7 fields we have a config for each day */}
                {fields.length !== 7 &&
                    <Flex>
                        <SelectField {...register('_dayPreset')}>
                            {dayOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                        </SelectField>
                        <Button onClick={addDayConfiguration}>Add Day Configuration</Button>
                    </Flex>
                }
            </Flex>
            <Flex flex="1 1 100%" minWidth="100%">
                <Button type="submit">Submit</Button>
            </Flex>
        </Flex>
    )
}