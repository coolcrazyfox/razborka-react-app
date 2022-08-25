import React, {useState} from 'react';

import './App.css';
import Modal from './ui/modal/Modal';
import Search from "./ui/search/Search";
import Table from "./ui/table/Table";

function App() {
    const [modalActive, setModalActive] = useState(true)
    return (
        <>

            <div className="main_container">
                {/*<div>https://github.com/coolcrazyfox/razborka-react-app/settings/pages</div>*/}
                <div>
                    <button onClick={() => setModalActive(true)}>Open modal</button>
                </div>
                <Search/>
                <Table/>

                {/*<div className="tab_container">*/}
                {/*    <table className="table">*/}
                {/*        <thead>*/}
                {/*        <tr>*/}
                {/*            <th>Model</th>*/}
                {/*            <th>Titile</th>*/}
                {/*            <th>OEM</th>*/}
                {/*            <th>Date</th>*/}
                {/*            <th>Ebay $</th>*/}
                {/*            <th>Склад $</th>*/}
                {/*            <th>Link</th>*/}

                {/*        </tr>*/}
                {/*        </thead>*/}
                {/*        <tbody>*/}
                {/*        <tr>*/}
                {/*            <td>Audi</td>*/}
                {/*            <td>Маховик</td>*/}
                {/*            <td>89815-50020</td>*/}
                {/*            <td>11.04.2022</td>*/}
                {/*            <td>200</td>*/}
                {/*            <td>190</td>*/}
                {/*            <td>*/}
                {/*                <a href="https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4">https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4*/}

                {/*                </a>*/}
                {/*            </td>*/}
                {/*        </tr>*/}
                {/*        <tr>*/}
                {/*            <td>BMW</td>*/}
                {/*            <td>Маховик</td>*/}
                {/*            <td>89815-50020</td>*/}
                {/*            <td>11.04.2022</td>*/}
                {/*            <td>200</td>*/}
                {/*            <td>190</td>*/}
                {/*            <td>*/}
                {/*                <a href="https://www.ebay.de/sch/i.html?_from=R40&_nkw=88150-50030&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4">https://www.ebay.de/sch/i.html?_from=R40&_nkw=88150-50030&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4*/}

                {/*                </a>*/}
                {/*            </td>*/}
                {/*        </tr>*/}
                {/*        <tr>*/}
                {/*            <td>Audi</td>*/}
                {/*            <td>Маховик</td>*/}
                {/*            <td>89815-50020</td>*/}
                {/*            <td>11.04.2022</td>*/}
                {/*            <td>200</td>*/}
                {/*            <td>190</td>*/}
                {/*            <td>*/}
                {/*                <a href="https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4">https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4*/}

                {/*                </a>*/}
                {/*            </td>*/}
                {/*        </tr>*/}
                {/*        <tr>*/}
                {/*            <td>Audi</td>*/}
                {/*            <td>Маховик</td>*/}
                {/*            <td>89815-50020</td>*/}
                {/*            <td>11.04.2022</td>*/}
                {/*            <td>200</td>*/}
                {/*            <td>190</td>*/}
                {/*            <td>*/}
                {/*                <a href="https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4">https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4*/}

                {/*                </a>*/}
                {/*            </td>*/}
                {/*        </tr>*/}
                {/*        <tr>*/}
                {/*            <td>Audi</td>*/}
                {/*            <td>Маховик</td>*/}
                {/*            <td>89815-50020</td>*/}
                {/*            <td>11.04.2022</td>*/}
                {/*            <td>200</td>*/}
                {/*            <td>190</td>*/}
                {/*            <td>*/}
                {/*                <a href="https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4">https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4*/}

                {/*                </a>*/}
                {/*            </td>*/}
                {/*        </tr>*/}
                {/*        <tr>*/}
                {/*            <td>Audi</td>*/}
                {/*            <td>Маховик</td>*/}
                {/*            <td>89815-50020</td>*/}
                {/*            <td>11.04.2022</td>*/}
                {/*            <td>200</td>*/}
                {/*            <td>190</td>*/}
                {/*            <td>*/}
                {/*                <a href="https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4">https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4*/}

                {/*                </a>*/}
                {/*            </td>*/}
                {/*        </tr>*/}
                {/*        <tr>*/}
                {/*            <td>Audi</td>*/}
                {/*            <td>Маховик</td>*/}
                {/*            <td>89815-50020</td>*/}
                {/*            <td>11.04.2022</td>*/}
                {/*            <td>200</td>*/}
                {/*            <td>190</td>*/}
                {/*            <td>*/}
                {/*                <a href="https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4">https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4*/}

                {/*                </a>*/}
                {/*            </td>*/}
                {/*        </tr>*/}
                {/*        <tr>*/}
                {/*            <td>Audi</td>*/}
                {/*            <td>Маховик</td>*/}
                {/*            <td>89815-50020</td>*/}
                {/*            <td>11.04.2022</td>*/}
                {/*            <td>200</td>*/}
                {/*            <td>190</td>*/}
                {/*            <td>*/}
                {/*                <a href="https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4">https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4*/}

                {/*                </a>*/}
                {/*            </td>*/}
                {/*        </tr>*/}
                {/*        <tr>*/}
                {/*            <td>Audi</td>*/}
                {/*            <td>Маховик</td>*/}
                {/*            <td>89815-50020</td>*/}
                {/*            <td>11.04.2022</td>*/}
                {/*            <td>200</td>*/}
                {/*            <td>190</td>*/}
                {/*            <td>*/}
                {/*                <a href="https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4">https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4*/}

                {/*                </a>*/}
                {/*            </td>*/}
                {/*        </tr>*/}
                {/*        <tr>*/}
                {/*            <td>Audi</td>*/}
                {/*            <td>Маховик</td>*/}
                {/*            <td>89815-50020</td>*/}
                {/*            <td>11.04.2022</td>*/}
                {/*            <td>200</td>*/}
                {/*            <td>190</td>*/}
                {/*            <td>*/}
                {/*                <a href="https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4">https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4*/}

                {/*                </a>*/}
                {/*            </td>*/}
                {/*        </tr>*/}
                {/*        </tbody>*/}
                {/*    </table>*/}


                {/*</div>*/}
                {/*<div className="container">*/}
                {/*  <input type="button" onClick="javascript: FindOnPage('text-to-find'); return false;" value="Find"/>*/}
                {/*  <input type="text" maxLength="30" placeholder="Search" className="searchbar" id="text-to-find" value="">*/}
                {/*    <img src="https://images-na.ssl-images-amazon.com/images/I/41gYkruZM2L.png" alt="search icon"*/}
                {/*         className="button">*/}
                {/*</div>*/}

            </div>

            <Modal active={modalActive} setActive={setModalActive}>
                {/*{children}*/}
            </Modal>


        </>


    );
}

export default App;
