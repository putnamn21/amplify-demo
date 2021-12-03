
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

    const { register, handleSubmit, formState, control, watch, getValues } = useForm()
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control,
        name: "daySettings"
    })

    //remove day from options if its already a day setting
    const dayOptions = Object.entries(DAYS).filter(([day]) => !watch('daySettings', []).map(({ day }) => day).includes(day))

    const addDayConfiguration = () => {
        const day = getValues('_dayPreset')
        append({
            day,
            active: false,
            startTime: ''
        })
    }

    const onSubmit = data => console.log(data)

    return (
        <Flex as="form" onSubmit={handleSubmit(onSubmit)} wrap="wrap">
            <Flex flex="1 1 16rem" direction="column" >
                <Heading level={3}>Profile Settings</Heading>
                <TextField label="Name" {...register("name")} />
                <CheckboxField label="Active" {...register("active")} />
                <TextField label="Tageted Weekly Water Amount (inches)" type="number" {...register("weeklyWaterAmount")} />
            </Flex>
            <Flex flex="1 1 16rem" direction="column">
                <Heading level={3}>Day Settings</Heading>
                {fields.map((field, index) => {

                    const day = DAYS[getValues(`daySettings.${index}.day`)]

                    return (
                        <Flex as="section" direction="column" key={field.id}>
                            <Heading>{day} <TextField {...register("day")} type="hidden" /></Heading>
                            <CheckboxField label="Active" {...register(`daySetting.${index}.active`)} gap="1rem" />
                            <TextField label="Start Time" {...register(`daySetting.${index}.startTime`)} />
                            <Divider />
                        </Flex>
                    )
                })}
                {/* Once we reach 7 fields we have a config for each day */}
                {fields.length !== 7 && <Flex>
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