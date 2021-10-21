import React from 'react';
import { useFormik ,    } from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from "react-redux";
import {addTask} from "../redux/actions/tasksActions";


const ExpensesForm = () => {
    const currentBalance = useSelector(store =>  store.tasks.currentBalance)
    const dispatch = useDispatch()

    console.log(currentBalance)
    const formik = useFormik({
        initialValues: {
            date: '',
            title: '',
            amount: '',
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .min(2, 'Too Short!')
                .max(10, 'Too Long!')
                .required('Required'),
            amount: Yup.number()
                .min(2, 'Too small!')
                .max(currentBalance, 'your number exceeds my balance!')
                .required('Required'),
        }),

        onSubmit: (values, {resetForm}) => {
            console.log(JSON.stringify(values, null, 2));
             dispatch(addTask(values))
            resetForm()
            // console.log( dispatch({type: 'ADD_TASKS', payload: values}))

        },
    })

    return (
        <div className='container'>
            {
                (
                    <form className='d-flex align-items-center pt-4 pb-lg-5 justify-content-between' onSubmit={formik.handleSubmit}>
                        <div className=''>
                            <label htmlFor="" className='form-label  text-secondary'>Date</label>
                            <input
                                type="date"
                                name='date'
                                className='form-control cursor-pointer '
                                onChange={formik.handleChange}
                                value={formik.values.date}
                            />
                            {formik.errors.date ? <div className='text-danger mt-3'>{formik.errors.date}</div> : null}
                        </div>
                        <div className=''>
                            <label htmlFor="" className='form-label  text-secondary'>Title</label>
                            <input type="text"
                                   className='form-control cursor-pointer'
                                   placeholder='Title'
                                   name='title'
                                   onChange={formik.handleChange}
                                   value={formik.values.title}
                            />
                            {formik.errors.title ? <div className='text-danger mt-3'>{formik.errors.title}</div> : null}

                        </div>
                        {/*{errors.title && touched.title ? (*/}
                        {/*     <div>{errors.title}</div>*/}
                        {/*  ) : null}*/}

                        <div className=''>
                            <label htmlFor="" className='form-label  text-secondary'>Amount</label>
                            <input type="number"
                                   className='form-control cursor-pointer'
                                   placeholder='0'
                                   name='amount'
                                   onChange={formik.handleChange}
                                   value={formik.values.amount}
                            />
                            {formik.errors.amount ? <div className='text-danger mt-3'>{formik.errors.amount}</div> : null}

                            {/*{errors.amount && touched.amount ? (*/}
                            {/*    <div>{errors.title}</div>*/}
                            {/*) : null}*/}

                        </div>
                        <button type='submit' className='btn btn-primary'>Добавить</button>

                    </form>

                )
            }
        </div>
    );
};

export default ExpensesForm;