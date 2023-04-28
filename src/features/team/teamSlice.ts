import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface TeamState {
    value: boolean
}

const initialState: TeamState = {
    value: Boolean(localStorage.getItem("login") || "false"),
}

export const teamSlice = createSlice({
    name: 'teams',
    initialState,
    reducers: {
        setLogin: (state, action: PayloadAction<boolean>) => {
            localStorage.setItem("login", "true")
            state.value = action.payload
        },
    },
})

export const { setLogin } = teamSlice.actions
export const selectCount = (state: RootState) => state.login
export const teamsReducer = teamSlice.reducer