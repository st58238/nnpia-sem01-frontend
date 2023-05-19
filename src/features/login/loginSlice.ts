import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface LoginState {
    authToken: string | null,
    expiration: Date | null
}

const initialState: LoginState = {
    authToken: localStorage.getItem("authToken"),
    expiration: localStorage.getItem("authTokenExpiration") != null ? new Date(localStorage.getItem("authTokenExpiration")!) : null
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLogin: (state, action: PayloadAction<string | null>) => {
            state.authToken = action.payload
            if (action.payload == null)
                localStorage.removeItem("authToken")
            else
                localStorage.setItem("authToken", state.authToken!)
        },
        setExpiry: (state, action: PayloadAction<Date | null>) => {
            state.expiration = action.payload
            if (action.payload == null)
                localStorage.removeItem("authTokenExpiration")
            else
                localStorage.setItem("authTokenExpiration", state.expiration!.toLocaleString())
        }
    },
})

export const { setLogin, setExpiry } = loginSlice.actions
export const loginReducer = loginSlice.reducer