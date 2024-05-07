// import React, {useEffect} from "react";
// import {useSelector, useDispatch} from "react-redux";
// import {setFilter, setSort} from "../../store/taskasSlice";
// import {fetchTasks} from "../../store/taskasSlice";
//
// const TodoPage = () => {
//
//     const dispatch = useDispatch()
//
//     const {tasks, status, error, filter, sort} = useSelector(state => state.tasksReducer)
//
//     useEffect(() => {
//         dispatch(fetchTasks())
//     }, [dispatch]);
//
//     const filteredTasks = tasks
//         .filter((tasks) => tasks.title.includes(filter))
//         .sort((a, b) => {
//             if (sort === 'id') {
//                 return a.id - b.id
//             } else if (sort === 'title') {
//                 return a.title.localeCompare(b.title)
//             }
//             return 0
//         })
//
//     if (status === 'loading') {
//         return <div>Loading...</div>
//     }
//     if (status === 'failed') {
//         return <div>Error:</div>
//     }
//
//     return (
//         <div>
//             <h1>Task</h1>
//
//             <div>
//                 <label>
//                     Filter by title:
//                     <input
//                         type='text'
//                         value={filter}
//                         onChange={(e) => dispatch(setFilter(e.target.value))}
//                     />
//                 </label>
//                 <label>
//                     Sort by:
//                     <select value={sort} onChange={(e) => dispatch(setSort(e.target.value))}>
//                         <option value="id">ID</option>
//                         <option value="title">Title</option>
//                     </select>
//                 </label>
//             </div>
//             <ul>
//                 {filteredTasks.map((task) => (
//                     <li key={task.id}>
//                         {task.title} (ID: {task.id})
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }
// export default TodoPage