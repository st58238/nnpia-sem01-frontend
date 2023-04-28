import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface LoginState {
    authToken: string
}

const initialState: LoginState = {
    authToken: String(localStorage.getItem("authToken") || "false"),
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLogin: (state, action: PayloadAction<string>) => {
            state.authToken = action.payload
            localStorage.setItem("authToken", state.authToken)
        },
    },
})

export const { setLogin } = loginSlice.actions
export const loginReducer = loginSlice.reducer