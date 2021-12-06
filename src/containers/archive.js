import { useState } from 'react'
import { useForm, useFieldArray } from "react-hook-form";
import { API, graphqlOperation } from 'aws-amplify'
import { listZones } from '../graphql/queries'
import {
    TextField,
    CheckboxField,
    Button,
    Flex,
    Heading,
    Loader
} from '@aws-amplify/ui-react'
import FetchData from '../components/FetchData'

const ZoneForm = ({ data }) => {
    const { register, handleSubmit, formState, control, getValues } = useForm({
        defaultValues: {
            zones: data.data.listZones.items
        }
    })
    const { fields, append, remove, } = useFieldArray({
        control,
        name: "zones"
    })
    const addZone = () => {
        const zones = getValues('zones')
        append({
            zoneNumber: zones.length + 1,
            active: true,
            name: '',
            description: '',
            runTime: 0
        })
    }

    async function onSubmit(data) {
        try {
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <Flex wrap="wrap">
                {fields.map((field, index) => {
                    return (
                        <Flex
                            key={field.id}
                            as="section"
                            direction="column"
                            flex="0 1 30%"
                            minWidth="20rem"
                            padding="1rem"
                            border="1px solid var(--amplify-light-grey)"
                            borderRadius="2px">
                            <Flex justifyContent="space-between" alignItems="center">
                                <Heading level={5}>Zone {field.zoneNumber}</Heading>
                                <Flex wrap="nowrap" alignItems="center">
                                    <CheckboxField label="Active" {...register(`zones.${index}.active`)} defaultChecked />
                                    <Button size="small" onClick={() => remove(index)}>Delete</Button>
                                </Flex>
                            </Flex>
                            <TextField
                                label="Name"
                                {...register(`zones.${index}.name`, { required: true })}
                                hasError={!!formState.errors?.zones?.[index]?.name}
                                errorMessage="Name is required."
                            />
                            <TextField label="Description" {...register(`zones.${index}.description`)} isMultiline rows={2} />
                        </Flex>
                    )
                })}
            </Flex>
            <Flex margin="1rem 0 0">
                <Button onClick={addZone}>Add Zone</Button>
                <Button type="submit">Save All</Button>
            </Flex>
        </form>
    )
}

export default function ZoneFormContainer() {
    return (
        <>
            <Heading level={4} margin="0 0 1em">Zones</Heading>
            <FetchData
                graphQLMethod={listZones}
                LoaderComponent={() => <Loader variation="linear" />}
                ErrorComponent={({ error }) => `Error: ${error.message}`}>
                {({ data, refresh }) => <ZoneForm data={data} />}
            </FetchData>
        </>
    )
}