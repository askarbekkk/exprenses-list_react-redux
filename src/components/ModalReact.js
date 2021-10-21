import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import {useFormik} from "formik";
import * as Yup from "yup";

import {writeName} from "../redux/actions/userActions";
import {useDispatch} from "react-redux";

const ModalReact = () => {
    const dispatch = useDispatch()

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);



    const formik = useFormik({
        initialValues: {
            name: '',

        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required'),

        }),

        onSubmit: (values, {resetForm}) => {
            console.log(JSON.stringify(values, null, 2));
            // console.log( dispatch({type: 'ADD_TASKS', payload: values}))

            dispatch({type: "ENTER_NAME", payload: values.name})

        },
    })

    return (
        <>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Hey, there! Write your name!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className=''>
                        <form action="" onSubmit={formik.handleSubmit}>
                            <label htmlFor="" className='form-label  text-secondary'>Enter your name </label>
                            <input type="text"
                                   className='form-control cursor-pointer my-3'
                                   placeholder='your name'
                                   name='name'
                                   onChange={formik.handleChange}
                                   value={formik.values.name}
                            />

                            <Button variant="primary" type='submit' onClick={handleClose}>
                                Save Changes
                            </Button>
                        </form>
                    </div>

                </Modal.Body>

            </Modal>
        </>
    );
};

export default ModalReact;