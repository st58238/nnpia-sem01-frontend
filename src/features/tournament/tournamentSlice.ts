import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import {teamSlice, teamsReducer} from "../team/teamSlice";

interface TournamentState {
    value: boolean
}

const initialState: TournamentState = {
    value: Boolean(localStorage.getItem("login") || "false"),
}

export const tournamentSlice = createSlice({
    name: 'tournament',
    initialState,
    reducers: {
        setLogin: (state, action: PayloadAction<boolean>) => {
            localStorage.setItem("login", "true")
            state.value = action.payload
        },
    },
})

export const { setLogin } = tournamentSlice.actions
export const selectCount = (state: RootState) => state.tournaments
export const tournamentReducer = teamSlice.reducer