import * as yup from "yup"
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {Button} from "@mui/material";
import {useAppDispatch} from "../../../app/hooks";
import {FormContainer, TextFieldElement} from "react-hook-form-mui";
import {setLogin} from "../../../features/login/loginSlice";
import {ReactElement} from "react";
import {ErrorValues} from "../Error";
import useError from "../../../features/error/errorMessage";

const resolver = yupResolver(yup.object({
    "username": yup.string()
        .max(255, "Username too long, use up to 255 characters.")
        .required("Required field"),
    "password": yup.string()
        .max(255, "Password too long, use up to 255 characters.")
        .required("Required field")

}))

interface LoginFormValues {
    username: string
    password: string
}

const LoginForm = () => {
    const {register, handleSubmit, formState:{errors}} = useForm<LoginFormValues>({resolver})
    const [error, setError] = useError()
    const dispatch = useAppDispatch()
    let err: ReactElement | undefined = undefined

    const submitHandle = async (data: LoginFormValues) => {
        const result = await fetch("http://localhost:9000/api/v1/login", {
            method: "post",
            mode: "cors",
            body: JSON.stringify({"username": data.username, "password": data.password}),
            //headers: { 'Content-type': 'application/json; charset=UTF-8' }
        })
        if (result.ok) {
            const token = await result.text()
            console.log("Got token: " + token)
            dispatch(setLogin(token))
        } else {
            const vals: ErrorValues = { title: "", message: undefined }
            // @ts-ignore
            setError(vals)
        }
    }

    return <>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Login
        </Typography>
        <FormContainer onSuccess={ data => submitHandle(data as LoginFormValues) }>
            <TextFieldElement id="username" label={"Username"} aria-describedby="username-text" {...register("username", { required: true })} />
            <TextFieldElement id="password" label={"Password"} aria-describedby="password-text" {...register("password", { required: true })} sx={{ marginTop: "20px"}} />
            <Button variant={"contained"} type="submit" sx={{ marginTop: "20px" }}>Login</Button>
        </FormContainer>
    </>
}
//<FormHelperText id="username-text">Your username, duh?!</FormHelperText>
// <FormHelperText id="password-text">Your password, for security reasons.</FormHelperText>
export default LoginForm