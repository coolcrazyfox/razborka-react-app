import React, {useState} from 'react';
import s from '../../style/Search.module.css'
const data=[{},{},{}]
const Search = () => {
    const [carList, setCarList]= useState(data)
    const [searchTerm, setSearchTerm]= useState('')

    return (
        <div className={s.search_container}>
            <div className={s.search_box}>
                <input type="text"
                       value={searchTerm}
                       autoFocus
                       autoComplete={'off'}
                       placeholder={'Search OEM car'}
                       className={s.input_search}
                />
                <ul className={s.tab_search}>
                    {carList.map((car, index)=>{
                        return <li key={index} className={s.search_item}>{car.car_module}</li>
                    })}
                </ul>
            </div>

        </div>
    );
};

export default Search;
