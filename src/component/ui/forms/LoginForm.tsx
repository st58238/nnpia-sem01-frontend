/**
 * Shamelessly PARTLY stolen from https://codevoweb.com/form-validation-react-hook-form-material-ui-react/
 * Thanks to original author and Bc. Chrbolka Ondřej for directions
 */

import * as yup from "yup"
import {object} from "yup";
import {useForm, FormProvider, SubmitHandler} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as React from "react";
import {Box, Button} from "@mui/material";
import {useAppDispatch} from "../../../app/hooks";
import {setExpiry, setLogin} from "../../../features/login/loginSlice";
import {useEffect} from "react";
import FormInput from "./FormInput";
import {ErrorValues, setError} from "../../../features/error/errorSlice";


const loginSchema = yupResolver(object({
    "username": yup.string()
        .required('Username is required')
        .max(255, 'Username must be less than 255 characters'),
    "password": yup.string()
        .required('Password is required')
        .max(255, 'Password must be less than 255 characters')
}))

interface LoginFormValues {
    username: string
    password: string
}

const LoginForm = () => {
    const methods = useForm<LoginFormValues>({resolver: loginSchema})
    const dispatch = useAppDispatch()

    const {
        reset,
        handleSubmit,
        register,
        formState: { isSubmitSuccessful, errors },
    } = methods

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSubmitSuccessful]);

    const onSubmitHandler: SubmitHandler<LoginFormValues> = async (data) => {
        const result = await fetch("http://localhost:9000/api/v1/login", {
            method: "post",
            mode: "cors",
            body: JSON.stringify({"username": data.username, "password": data.password})
        })
        if (result.ok) {
            const res = await result.json()
            console.table(result)
            dispatch(setLogin(res.token))
            dispatch(setExpiry(res.expiry))
            dispatch(setError(undefined))
        } else {
            const errorValues: ErrorValues = {
                title: "Authentication failed",
                message: await result.text()
            }
            dispatch(setError(errorValues))
        }
    };

    return <>
        <FormProvider {...methods}>
            <Box
                component='form'
                noValidate
                autoComplete='off'
                onSubmit={handleSubmit(onSubmitHandler)}
            >
                <FormInput
                    name='username'
                    required
                    fullWidth
                    label='Username'
                    sx={{ mb: 2 }}
                />
                <FormInput
                    name='password'
                    required
                    fullWidth
                    label='Password'
                    type='password'
                    sx={{ mb: 2 }}
                />
                <Button
                    variant='contained'
                    fullWidth
                    type='submit'
                    value='Login'
                    sx={{ py: '0.8rem', mt: '1rem' }}
                >Login</Button>
            </Box>
        </FormProvider>
    </>
}

export default LoginForm
