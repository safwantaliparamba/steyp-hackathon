import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    isAuthenticated:false,
}

const authSlice = createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{
        login(state){
            return {
                ...state,
                isAuthenticated :true,
            }
        },
        logout(state){
            return {
                ...state,
                isAuthenticated :false,
            }
        }
    },
})

export const authActions = authSlice.actions
export default authSlice.reducer