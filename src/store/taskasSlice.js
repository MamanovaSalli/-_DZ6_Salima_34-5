// import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
// import axios from "axios";
//
// export const fetchTasks = createAsyncThunk(
//     'tasks/fetchTasks',
//     async () => {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
//         return response.data
//     }
// )
//
// const  taskSlice = createSlice({
//     name: 'tasks',
//     initialState: {
//         tasks: [],
//         status: 'idle',
//         error: null,
//         filter: '',
//         soft: 'id'
//     },
//     reducers: {
//       setFilter: (state, action) => {
//           state.filter = action.payload;
//       }  ,
//         setSort: (state, action) => {
//           state.sort = action.payload;
//       }
//
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchTasks.pending, (state) => {
//                 state.status = 'loading'
//             })
//             .addCase(fetchTasks.fulfilled, (state, action ) => {
//                 state.status = 'succeeded'
//                 state.tasks = action.payload;
//             })
//             .addCase(fetchTasks.rejected, (state, action ) => {
//                 state.status = 'failed'
//                 state.tasks = action.error.message;
//             })
//
//     }
// })
// export const {setFilter, setSort} = taskSlice.actions
//
// export default taskSlice.reducer