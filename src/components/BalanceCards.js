import React from 'react';
import {useSelector} from "react-redux";

const BalanceCards = () => {
    const initAmount = useSelector(store => store.tasks.initialAmount)
    const currentBalance = useSelector(store => store.tasks.currentBalance)
    const spent = useSelector(store => store.tasks.costs)
    return (
        <div className='container'>
            <div className="row d-flex ">
                <div className="col-lg-4">
                    <div className="card ">
                        <div className="card-body p-0">
                            <h1 className="card-title py-3 ps-4"> {'$ ' + initAmount}</h1>
                            <div className='d-flex justify-content-between py-4 bg-success w-100'>
                                <h3 className='text-light ps-4'>Initial Amount</h3>
                                <button className='btn btn-secondary'>Replenish</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card ">
                        <div className="card-body p-0">
                            <h1 className="card-title py-3 ps-4"> {'$ ' +spent}</h1>
                            <div className='py-4 bg-danger'>
                                <h3 className='text-light ps-4'>Spent</h3>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-lg-4">
                    <div className="card ">
                        <div className="card-body p-0">
                            <h1 className="card-title py-3 ps-4">{'$ '+currentBalance}</h1>
                            <div className='py-4 bg-primary   bg-opacity-50'>
                                <h3 className='text-light ps-4'>
                                    Rest
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BalanceCards;