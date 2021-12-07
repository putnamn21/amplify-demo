import { useEffect } from 'react'
import { useForm } from "react-hook-form";
import {
    TextField,
    Button,
    Flex,
    Heading,
    Loader
} from '@aws-amplify/ui-react'

export default function ZoneForm({ zone, isNew, handleUpdateZone, handleSaveZone }) {
    const { register, handleSubmit, formState, reset } = useForm()
    const onSubmit = async (data) => {
        try {
            await isNew ? handleSaveZone(data) : handleUpdateZone(data)
        } catch (e) {
            console.log(e)
        }
    }

    //watch for change in zone and reset form?
    useEffect(() => {
        console.log('zone changed, resetting form', zone.zoneNumber)
        reset(zone)
    }, [zone, reset])

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
                    {(formState.isDirty || isNew) && <Button size="small" type="submit" disabled={formState.isSubmitting}> {formState.isSubmitting ? <Loader /> : 'Save'}</Button>}
                    {(formState.isDirty && <Button size="small" onClick={() => reset(zone)}>Cancel</Button>)}
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