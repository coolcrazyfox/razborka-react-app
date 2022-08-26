import React, {useState} from 'react';

import './App.css';
import Modal from './ui/modal/Modal';
import Search from "./ui/search/Search";
import TabPage from "./pages/TabPage";
import OEM_DATA from "./OEM_DATA.json";


const data = OEM_DATA;

function App() {
    const [itemCarList, setItemCarList]=useState(data)
    const [modalActive, setModalActive] = useState(false)
    return (
        <>

            <div className="main_container">
                {/*<div>https://github.com/coolcrazyfox/razborka-react-app/settings/pages</div>*/}
                <div>
                    <Search/>
                    <button onClick={() => setModalActive(true)}>Open modal</button>
                </div>
                {/*<Search/>*/}
                <TabPage oemList={itemCarList}/>

            </div>

            <Modal active={modalActive} setActive={setModalActive}>
                {/*{children}*/}
            </Modal>


        </>


    );
}

export default App;
