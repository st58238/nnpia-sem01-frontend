import { configureStore } from '@reduxjs/toolkit'
import {loginReducer} from "../features/login/loginSlice";
import {userReducer} from "../features/user/userSlice";
import {matchReducer} from "../features/match/matchSlice";
import {teamsReducer} from "../features/team/teamSlice";
import {tournamentReducer} from "../features/tournament/tournamentSlice";
import {errorReducer} from "../features/error/errorSlice";

export const store = configureStore({
    reducer: {
        tournaments: tournamentReducer,
        matches: matchReducer,
        teams: teamsReducer,
        users: userReducer,
        login: loginReducer,
        error: errorReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch