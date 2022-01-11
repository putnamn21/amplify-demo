import { useForm } from "react-hook-form";
import {
    TextField,
    CheckboxField,
    Button,
    Flex,
    Heading,
} from '@aws-amplify/ui-react'

export default function ProfileForm({store, dispatch, navigate}){
   
    const { register, handleSubmit, formState: {errors} } = useForm({
        defaultValues: {
            name: store.name,
            active: store.active
        }
    })
    const onSubmit = data => {
        dispatch({
            type: 'profile_update',
            payload: data
        })
        navigate('./days')
    }

    return (
         <Flex as="form" direction="column" maxWidth="100vw" width="20rem" onSubmit={handleSubmit(onSubmit)}>
            <Heading level={3}>Profile Settings</Heading>
            <TextField label="Name" {...register("name", { required: 'A value is required.'})} hasError={!!errors.name} errorMessage={errors.name?.message} />
            <CheckboxField label="Active" {...register("active")} />
            <Button type="submit">Next</Button>
        </Flex>
    )
}