import {Alert, AlertTitle} from "@mui/material"
import * as React from "react"
import useError from "../../features/error/errorMessage"

export interface ErrorValues {
    title: string
    message: string | undefined
}

const Error = () => {
    const [errorValue] = useError()
    console.table(errorValue)
    //{errorValue.message && <p>{error.message}</p>}
    return <Alert severity="error">
        <AlertTitle></AlertTitle>
    </Alert>
}

export default Error