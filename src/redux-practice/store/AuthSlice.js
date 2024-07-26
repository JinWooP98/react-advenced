import {createSlice} from "@reduxjs/toolkit";

const initialAuthState = {
    isLoggedIn: false
};

// 인증 관련 슬라이스 추가
const authSlice = createSlice({
    name:'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isLoggedIn = true;
        },
        logOut(state) {
            state.isLoggedIn = false;
        }
    }
});

const authReducer = authSlice.reducer;

export const authActions = authSlice.actions;

export default authReducer;