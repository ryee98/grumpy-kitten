import React, { useEffect } from 'react';

import { SectionHeader } from '../blocks/SectionHeader';
import { CarForm } from '../car-tool/CarForm';
import { CarTable } from '../car-tool/CarTable';

export const CarToolPage = (props) => {
    const {cars, onAddCar, onUpdateCar,
          onDeleteCar, onEditCar, onCancelCar, 
          onRefreshCars : refreshCars, editCarId} = props;

    useEffect(() => {
        refreshCars();
      }, []);
 //   const [cars, setCars] = useState(initialCars.concat());
 //   const [editCarId, setEditCarId] = useState(-1);
/*
    const addCar = (car) => {
        setCars(cars.concat({
            ...car,
            id: Math.max(...cars.map(c => c.id), 0) + 1,
        })
        );
        setEditCarId(-1);
    };
*/

/*
    const updateCar = car => {
        const carIndex = cars.findIndex(c => c.id === car.id);
        const tmpCars = cars.concat();
        tmpCars[carIndex] = car;
        setCars(tmpCars);
        setEditCarId(-1);
    }

    const editCar = carId => {
        console.log('editCar', carId)
        setEditCarId(carId);
    }

    const deleteCar = (id) => {
        setCars(cars.filter((c) => {
            return c.id !== id;
        })
        );
    };

    const cancel = (id) => {
        setEditCarId(-1);
    }
*/

    return ( <>
            <SectionHeader headerText="Car Tool" />

            <section>
                <h3>Car Tool</h3>
                <CarTable cars={cars} onDelete={onDeleteCar} onEdit={onEditCar} onSave={onUpdateCar} onCancel={onCancelCar} editCarId={editCarId} />
            </section>
            <section>
                <h3>Car Form</h3>
                <CarForm buttonText="Add Car" onSubmitCar={onAddCar} />
            </section>
            </>
    );
};
