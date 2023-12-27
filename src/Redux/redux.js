
import { createSlice } from "@reduxjs/toolkit";



export const UserSlice = createSlice({
    name: "userList",
    initialState: {
        userLists: [],
        selectedUser: null,
    },
    reducers: {
        setUserList: (state, action) => {
            state.userLists = action.payload

            return state
        },
        addUserList: (state, action) => {
            state.userLists = [...state.userLists, action.payload]
        },
        deleteUserFromList: (state, action) => {
            const getId = action.payload;
            state.userLists = state.userLists.filter((user) => user.id != getId)

        },
        editUserList: (state, action) => {
            const editedUser = action.payload;
            state.userLists = state.userLists.map((user) =>
                user.id === editedUser.id ? editedUser : user
            )

        }, 
        viewUserList : (state,action)=>{
            const viewUser=action.payload;
            state.selectedUser=state.userLists.find((user)=> user.id == viewUser)
        }




    }
})


export const { setUserList, addUserList, deleteUserFromList, editUserList ,viewUserList} = UserSlice.actions;