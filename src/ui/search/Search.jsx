import React, {useEffect, useState} from 'react';
import s from '../../style/Search.module.css';


import MOCK_DATA from './../../MOCK_DATA.json';
import Carlist from "../components/Carlist";

const data = MOCK_DATA;

// const data=[{},{},{}]
const filterCars=(searchText, listOfCars)=>{
    if(!searchText){
        return listOfCars
    }
    return listOfCars.filter(({car_model})=>
    car_model.toLowerCase().includes(searchText.toLowerCase())
    )

}
const Search = () => {
    const [carList, setCarList]= useState(data)
    const [searchTerm, setSearchTerm]= useState('')
    useEffect(()=>{
        const Debounce =setTimeout(()=> {
            const filteredCars = filterCars(searchTerm, data)
            setCarList(filteredCars)
        },1000)
        return ()=>clearTimeout(Debounce)

    },[searchTerm])

    return (
        <div className={s.search_container}>
            <div className={s.search_box}>
                <input type="text"
                       value={searchTerm}
                       autoFocus
                       autoComplete={'off'}
                       placeholder={'Search OEM car'}
                       onChange={(e) =>setSearchTerm(e.target.value)}
                       className={s.input_search}
                />
                <Carlist carList={carList}/>
                {/*<ul className={s.tab_search}>*/}
                {/*    {carList.map((car, index)=>{*/}
                {/*        return <li key={index} className={s.search_item}>{car.car_module}</li>*/}
                {/*    })}*/}
                {/*</ul>*/}
            </div>

        </div>
    );
};

export default Search;
