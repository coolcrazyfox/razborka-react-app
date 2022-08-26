import React, {useState} from 'react';
import {useProducts} from '../hook/products';
import ErrorMessage from '../ui/components/ErrorMessage';
import Loader from '../ui/components/Loader';
import Table from "../ui/table/Table";
import s from "../style/Table.module.css";
import OEM_DATA from "../OEM_DATA.json";
const data = OEM_DATA;

const TabPage = ({oemList}) => {
    const [itemCarList, setItemCarList]=useState(data)
    const {loading, error, products} = useProducts()
    return (
        <div>
            {loading && <Loader/>}
            {error && <ErrorMessage error={error}/>}
            <div className={s.tab_container}>
                <table className={s.table}>
                    <thead>
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
                    {/*{product.map(pr=><Table model={pr} key={pr.id}/>)}*/}

                    {/*<Carlist carList={carList}/>*/}

                    {/*<ul className={s.tab_search}>*/}
                    {/*    {carList.map((car, index)=>{*/}
                    {/*        return <li key={index} className={s.search_item}>{car.car_module}</li>*/}
                    {/*    })}*/}
                    {/*</ul>*/}


                        {oemList.map((car, index) => {
                        return <Table key={index}
                                      // model={car}
                                      car_model={car.car_model}
                                      car_model_title={car.car_model_title}
                                      car_OEM={car.car_OEM}
                                      date={car.date}
                                      shop_price={car.shop_price}
                                      warehouse={car.warehouse}
                                      link={car.link}
                            />

                        // <td>Маховик</td>
                        // <td>89815-50020</td>
                        // <td>11.04.2022</td>
                        // <td>200</td>
                        // <td>190</td>
                        // <td>
                        //     <a href="#">https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4
                        //
                        //     </a>
                        // </td>
                    })}
                    </tbody>
                </table>


            </div>

        </div>
    );
};

export default TabPage;
