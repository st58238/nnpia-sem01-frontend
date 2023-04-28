import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface MatchState {
    value: boolean
}

const initialState: MatchState = {
    value: Boolean(localStorage.getItem("login") || "false"),
}

export const matchSlice = createSlice({
    name: 'match',
    initialState,
    reducers: {
        setLogin: (state, action: PayloadAction<boolean>) => {
            localStorage.setItem("login", "true")
            state.value = action.payload
        },
    },
})

export const { setLogin } = matchSlice.actions
export const selectCount = (state: RootState) => state.login
export const matchReducer = matchSlice.reducer