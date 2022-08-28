import React, {useState} from 'react';

import './App.css';
import Modal from './ui/modal/Modal';
import Search from "./ui/search/Search";
import TabPage from "./pages/TabPage";
import OEM_DATA from "./OEM_DATA.json";
import Table from "./ui/table/Table";


const data = OEM_DATA;

function App() {
    const [itemCarList, setItemCarList]=useState(data)
    // const [itemCarList, setItemCarList]=useState(data.slice(0,30))
    // const [pageNumber, setPageNumber]=useState(0)

    const [modalActive, setModalActive] = useState(false)

    // const carsPerPage = 10
    // const pagesVisited = pageNumber * carsPerPage
    // const displayItemCarList = itemCarList
    //     .slice(pagesVisited, pagesVisited + carsPerPage)
    //     .map(i=>{
    //         return<Table/>
    //     })

    return (
        <>
            <div className="main_container">
                {/*<div>https://github.com/coolcrazyfox/razborka-react-app/settings/pages</div>*/}
                <div className={'search_container'}>

                    <button onClick={() => setModalActive(true)}>Open modal</button>
                </div>
                <TabPage oemList={itemCarList}/>
            </div>

            <Modal active={modalActive} setActive={setModalActive}>
                {/*{children}*/}
            </Modal>


        </>


    );
}

export default App;
