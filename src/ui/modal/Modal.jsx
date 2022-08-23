import React from 'react';
import s from '../../style/Modal.module.css'

const Modal = ({active, setActive}) => {
    return (
        <div className={s.modal}>
            <div className={s.modal_container}>
                <div className={s.modal_box}>
                    <div className={s.tab_container}>
                        <table className={s.table}>
                            <thead>
                            <tr>
                                <th>Country</th>
                                <th>Price</th>
                                <th>OEM</th>
                                <th>Date</th>
                                <th>Link</th>
                                <th>Image</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Pome</td>
                                <td>200</td>
                                <td>89815-50020</td>
                                <td>11.04.2022</td>
                                <td>
                                    <a href="https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4">https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4

                                    </a>
                                </td>
                                <td>
                                    <img src={'https://i.ebayimg.com/thumbs/images/g/UNAAAOSwgHxg9uaq/s-l225.webp'}
                                         alt={'#'}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Kipr</td>
                                <td>250</td>
                                <td>89815-50020</td>
                                <td>12.04.2022</td>
                                <td>
                                    <a href="https://www.ebay.de/sch/i.html?_from=R40&_nkw=88150-50030&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4">https://www.ebay.de/sch/i.html?_from=R40&_nkw=88150-50030&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4

                                    </a>
                                </td>
                                <td>
                                    <img src={'https://i.ebayimg.com/thumbs/images/g/UNAAAOSwgHxg9uaq/s-l225.webp'}
                                         alt={'#'}/>
                                </td>
                            </tr>
                            </tbody>
                        </table>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
