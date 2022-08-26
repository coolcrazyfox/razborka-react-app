import React from 'react';
import {useProducts} from '../hook/products';
import ErrorMessage from '../ui/components/ErrorMessage';
import Loader from '../ui/components/Loader';
import Table from "../ui/table/Table";
import s from "../style/Table.module.css";
import Search from "../ui/search/Search";



const TabPage = ({oemList}) => {
    const {loading, error, products} = useProducts()
    return (
        <div >
            {loading && <Loader/>}
            {error && <ErrorMessage error={error}/>}

            <div className={s.tab_container}>
                <table className={s.table}>
                    <thead>
                    <Search/>
                    <tr>
                        <th>Model</th>
                        <th>Titile</th>
                        <th>OEM</th>
                        <th>Date</th>
                        <th>Ebay $</th>
                        <th>Склад $</th>
                        <th>Link</th>

                    </tr>
                    </thead>
                    <tbody>
                    {oemList.map((car, index) => {
                        return <Table key={index}
                                      car_model={car.car_model}
                                      car_model_title={car.car_model_title}
                                      car_OEM={car.car_OEM}
                                      date={car.date}
                                      shop_price={car.shop_price}
                                      warehouse={car.warehouse}
                                      link={car.link}
                        />
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TabPage;
