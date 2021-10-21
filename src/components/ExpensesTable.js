import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {deleteTask} from "../redux/actions/tasksActions";
import {sortTasks} from "../redux/actions/tasksActions";
import {Form} from 'react-bootstrap'
const ExpensesTable = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(store => store.tasks.tasks)
    console.log(tasks)
    return (
        <>
         <div>

         </div>
        <table className="table">
            <thead>
            <tr>

                <th scope="">Date</th>
                <th scope="">Item Name</th>
                <th scope=""
                onClick={() => dispatch(sortTasks())}
                >Item Price</th>
                <th scope="">Actions</th>
            </tr>
            </thead>
            <tbody>
            {
                tasks.map((el,idx) => (
                    <tr key={idx} >
                        <td>{el.date}</td>
                        <td>{el.title}</td>
                        <td>{ "$ " + el.amount}</td>
                        <td> <button onClick={() => dispatch(deleteTask(idx))} className='btn btn-danger'>Удалить</button></td>

                    </tr>
                ))
            }

            </tbody>
        </table>
            </>
    );

};


export default ExpensesTable;