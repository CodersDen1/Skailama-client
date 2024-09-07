import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    username: string;
    email: string;
}

const initialState: UserState = {
    username: '',
    email: '',
};


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signUp: (state, action: PayloadAction<string>) => {
            const email = action.payload;
            const username = email.substring(0, email.indexOf('@'));
            state.username = username;
            state.email = email;
        },
    },
});

export const { signUp } = userSlice.actions;
export default userSlice.reducer;