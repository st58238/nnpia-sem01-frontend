import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface UserState {
    value: boolean
}

const initialState: UserState = {
    value: Boolean(localStorage.getItem("login") || "false"),
}

export const userSlice = createSlice({
    name: 'user',

    initialState,
    reducers: {
        setLogin: (state, action: PayloadAction<boolean>) => {
            localStorage.setItem("login", "true")
            state.value = action.payload
        },
    },
})

export const { setLogin } = userSlice.actions
export const selectCount = (state: RootState) => state.login
export const userReducer = userSlice.reducer