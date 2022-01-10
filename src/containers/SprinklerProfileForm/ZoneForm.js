

import { useForm } from "react-hook-form";
import {
    TextField,
    CheckboxField,
    Button,
    Flex,
    Heading,
} from '@aws-amplify/ui-react'

export default function ProfileForm({store, dispatch}){
    const { register, handleSubmit, formState: { errors }, control } = useForm({
        defaultValues: {
            zones: store.zones
        }
    })
    const { fields, append, remove, } = useFieldArray({
        control,
        name: "zoneSettings"
    })
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
    return(
         <Flex as="form" onSubmit={handleSubmit(onSubmit)} wrap="wrap">
            <Flex flex="1 1 16rem" direction="column" >
                <Heading level={3}>{store.name} Zones</Heading>
                    {fields.map((field, index) => {
                        return (
                            <Flex as="section" direction="column" key={field.id}>
                                <Flex justifyContent="space-between" alignContent="center">
                                    <Heading level={5}>{day}</Heading>
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
                <Button type="submit">Next</Button>
            </Flex>
        </Flex>
    )
}
