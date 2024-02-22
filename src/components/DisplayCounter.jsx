import React from 'react';
import { useSelector } from 'react-redux';

export default function DisplayCounter() {
    const counterobj = useSelector(state => state.counter);
    const counterVal = counterobj.counterVal;
    return (
        <p className="lead mb-4">Counter Current Value: {counterVal}</p>
    )
}
