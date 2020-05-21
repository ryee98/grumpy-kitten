import React from 'react';

import { useForm } from '../../hooks/useForm';
import './CarForm.css'

export const CarForm = ({buttonText, onSubmitCar}) => {

    const [ carForm, change, resetCarForm] = useForm ({
        id:'', make:'',model:'',year:'',color:'',price:''
    });

    const submitCar = () => {
        onSubmitCar({...carForm});
        resetCarForm();
    };

    return (
        <form id="car-form">
        <div>
            <label htmlFor="car-make-input">Make:</label>
            <input type="text" id="car-make-input" name="make" value={carForm.make}  onChange={change}/>
        </div>
        <div>
            <label htmlFor="car-model-input">Model:</label>
            <input type="text" id="car-model-input" name="model" value={carForm.model}  onChange={change}/>
        </div>
        <div>
            <label htmlFor="car-year-input">Year:</label>
            <input type="number" id="car-year-input" name="year" min="{new Date().getFullYear()- 10}" max="{new Date().getFullYear()}" value={carForm.year}  onChange={change}/>
        </div>
        <div>
            <label htmlFor="car-color-input">Color:</label>
            <input type="text" id="car-color-input" name="color" value={carForm.color}  onChange={change}/>
        </div>
        <div>
            <label htmlFor="car-price-input">Price:</label>
            <input type="number" id="car-price-input" name="price" value={carForm.price}  onChange={change}/>
        </div>
        <div>
            <button type="button" onClick={submitCar}>{buttonText}</button>
        </div>
    </form>
    )
}

CarForm.defaultProps = {
    buttonText: 'Submit Car',
}