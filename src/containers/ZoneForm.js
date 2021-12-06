import { useForm } from "react-hook-form";
import {
    TextField,
    CheckboxField,
    Button,
    Flex,
    Heading,
    Loader
} from '@aws-amplify/ui-react'

export default function ZoneForm({ zone }) {
    console.log(zone)
    const { register, handleSubmit, formState, control, getValues } = useForm({
        defaultValues: {
            ...zone
        }
    })

    async function onSubmit(data) {
        try {
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Flex
            as="form"
            onSubmit={handleSubmit(onSubmit)}
            direction="column"
            flex="0 1 50%"
            minWidth="20rem"
            padding="1rem"
            border="1px solid var(--amplify-light-grey)"
            borderRadius="2px">
            <Flex justifyContent="space-between" alignItems="center">
                <Heading level={5}>Zone {zone.zoneNumber}</Heading>
                <Flex wrap="nowrap" alignItems="center">
                    <CheckboxField label="Active" {...register('active')} defaultChecked />
                    {formState.isDirty && <Button type="submit">Save</Button>}
                    <Button size="small" onClick={() => { }}>Delete</Button>
                </Flex>
            </Flex>
            <TextField
                label="Name"
                {...register('name', { required: true })}
                hasError={!!formState.errors?.name}
                errorMessage="Name is required."
            />

            <TextField label="Description" {...register('description')} isMultiline rows={2} />
        </Flex>
    )
}