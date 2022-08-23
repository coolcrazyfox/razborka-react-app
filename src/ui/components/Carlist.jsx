import React from 'react';
import Car from './Car';

const Carlist = ({ carList, searchTerm }) => {
    return (
        <div className="container-lg mx-auto grid-cols-3">
            {carList.map((car, index) => {
                return (
                    <Car
                        key={index}
                        carCompany={car.car_company}
                        carModel={car.car_model}
                        carYear={car.car_year}
                    />
                )
            })}
        </div>
    );

}

export default Carlist;
