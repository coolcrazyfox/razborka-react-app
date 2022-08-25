import React, {useState} from 'react';
import s from '../../style/Table.module.css';
import {IProduct} from "../../models";

interface ModelProductProps {
    model: IProduct
}

const Table = ({model}:ModelProductProps) => {
    // const [carModel, setCarModel]=useState(false)
    return (
        <tr>

                <td >{model.car_model}</td>
                <td >{model.car_model_title}</td>
                <td >{model.car_OEM}</td>
                <td >{model.date}</td>
                <td >{model.shop_price}</td>
                <td >{model.warehouse}</td>
                <td >
                    <a href={model.link}>{model.link}</a>
                </td>


        </tr>
    );
};

export default Table;
