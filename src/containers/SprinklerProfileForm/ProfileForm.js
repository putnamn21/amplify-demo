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
         <Flex as="form" onSubmit={handleSubmit(onSubmit)} wrap="wrap">
            <Flex flex="1 1 16rem" direction="column" >
                <Heading level={3}>Profile Settings</Heading>
                <TextField label="Name" {...register("name", { required: 'A value is required.'})} hasError={!!errors.name} errorMessage={errors.name?.message} />
                <CheckboxField label="Active" {...register("active")} />
            </Flex>
            <Flex flex="1 1 100%" minWidth="100%">
                <Button type="submit">Next</Button>
            </Flex>
        </Flex>
    )
}