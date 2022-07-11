import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addItem: (state, action) => {
            return { items: [...state.items, action.payload]}
        },
        removeItem: (state, action) => {
            console.log(action)
            let array = [...state.items]
            let index = action.payload
            if(index !== -1) {
                array.splice(index, 1)
                return { items: array }
            }
        },
        removeAll: () => {
            return { items: [] }
        }
    }
})

export const { addItem, removeItem, removeAll } = todoSlice.actions

export default todoSlice.reducer