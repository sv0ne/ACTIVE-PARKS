import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthPayload {
    userId: string;
    sessionId: string;
    permissions: string[];
}

interface AuthState {
    token: string | null;
    refreshToken: string | null;
    payload: AuthPayload | null;
}

const initialState: AuthState = {
    token: null,
    refreshToken: null,
    payload: null
};

// Создай slice
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<AuthState>) => {
            state = {...action.payload};
        }
    },
});

export default authSlice.reducer;
export const { login } = authSlice.actions;

