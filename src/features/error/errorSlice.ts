import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ErrorValues {
    title: string
    message: string | undefined
}

export interface ErrorState {
    value: ErrorValues | undefined
}

const initialState: ErrorState = {
    value: undefined
}

export const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setError: (state, action: PayloadAction<ErrorValues | undefined>) => {
            state.value = action.payload
        }
    }
})

export const { setError } = errorSlice.actions
export const errorReducer = errorSlice.reducer