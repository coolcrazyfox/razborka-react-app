import React, {useState} from 'react';
import s from '../../style/Table.module.css';
import {IProduct} from "../../models";

interface ModelProductProps {
    model: IProduct
}

const Table = ({model}:ModelProductProps) => {
    const [carModel, setCarModel]=useState(false)
    return (
        <div>
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
                    <tr>
                        <td>Audi</td>
                        <td>Маховик</td>
                        <td>89815-50020</td>
                        <td>11.04.2022</td>
                        <td>200</td>
                        <td>190</td>
                        <td>
                            <a href="#">https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4

                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>BMW</td>
                        <td>Маховик</td>
                        <td>89815-50020</td>
                        <td>11.04.2022</td>
                        <td>200</td>
                        <td>190</td>
                        <td>
                            <a href="https://www.ebay.de/sch/i.html?_from=R40&_nkw=88150-50030&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4">https://www.ebay.de/sch/i.html?_from=R40&_nkw=88150-50030&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4

                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Audi</td>
                        <td>Маховик</td>
                        <td>89815-50020</td>
                        <td>11.04.2022</td>
                        <td>200</td>
                        <td>190</td>
                        <td>
                            <a href="https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4">https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4

                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Audi</td>
                        <td>Маховик</td>
                        <td>89815-50020</td>
                        <td>11.04.2022</td>
                        <td>200</td>
                        <td>190</td>
                        <td>
                            <a href="https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4">https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4

                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Audi</td>
                        <td>Маховик</td>
                        <td>89815-50020</td>
                        <td>11.04.2022</td>
                        <td>200</td>
                        <td>190</td>
                        <td>
                            <a href="https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4">https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4

                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Audi</td>
                        <td>Маховик</td>
                        <td>89815-50020</td>
                        <td>11.04.2022</td>
                        <td>200</td>
                        <td>190</td>
                        <td>
                            <a href="https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4">https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4

                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Audi</td>
                        <td>Маховик</td>
                        <td>89815-50020</td>
                        <td>11.04.2022</td>
                        <td>200</td>
                        <td>190</td>
                        <td>
                            <a href="https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4">https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4

                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Audi</td>
                        <td>Маховик</td>
                        <td>89815-50020</td>
                        <td>11.04.2022</td>
                        <td>200</td>
                        <td>190</td>
                        <td>
                            <a href="https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4">https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4

                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Audi</td>
                        <td>Маховик</td>
                        <td>89815-50020</td>
                        <td>11.04.2022</td>
                        <td>200</td>
                        <td>190</td>
                        <td>
                            <a href="https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4">https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4

                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Audi</td>
                        <td>Маховик</td>
                        <td>89815-50020</td>
                        <td>11.04.2022</td>
                        <td>200</td>
                        <td>190</td>
                        <td>
                            <a href="https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4">https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4

                            </a>
                        </td>
                    </tr>
                    </tbody>
                </table>


            </div>

        </div>
    );
};

export default Table;
