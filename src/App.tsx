import React from 'react';

import './App.css';

function App() {
//     var lastResFind=""; // последний удачный результат
//     var copy_page=""; // копия страницы в ихсодном виде
//     function TrimStr(s) {
//         s = s.replace( /^\s+/g, '');
//         return s.replace( /\s+$/g, '');
//     }
//     function FindOnPage(inputId) {//ищет текст на странице, в параметр передается ID поля для ввода
//         var obj = window.document.getElementById(inputId);
//         var textToFind;
//
//         if (obj) {
//             textToFind = TrimStr(obj.value);//обрезаем пробелы
//         } else {
//             alert("Введенная фраза не найдена");
//             return;
//         }
//         if (textToFind == "") {
//             alert("Вы ничего не ввели");
//             return;
//         }
//
//         if(document.body.innerHTML.indexOf(textToFind)=="-1")
//             alert("Ничего не найдено, проверьте правильность ввода!");
//
//         if(copy_page.length>0)
//             document.body.innerHTML=copy_page;
//         else copy_page=document.body.innerHTML;
//
//
//         document.body.innerHTML = document.body.innerHTML.replace(eval("/name="+lastResFind+"/gi")," ");//стираем предыдущие якори для скрола
//         document.body.innerHTML = document.body.innerHTML.replace(eval("/"+textToFind+"/gi"),"<a name="+textToFind+" style='background:#7cf5a088'>"+textToFind+"</a>"); //Заменяем найденный текст ссылками с якорем;
//         lastResFind=textToFind; // сохраняем фразу для поиска, чтобы в дальнейшем по ней стереть все ссылки
//         window.location = '#'+textToFind;//перемещаем скрол к последнему найденному совпадению
// }
    return (
        <>
            <div className="main_container">
                {/*<div>https://github.com/coolcrazyfox/razborka-react-app/settings/pages</div>*/}
                <div className="tab_container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Model</th>
                            <th>Titile</th>
                            <th>OEM</th>
                            <th>Date</th>
                            <th>Ebay $</th>
                            <th>Склад $</th>
                            <th>Link</th>
                            <th>Image</th>
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
                                <a href="https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4">https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4

                                </a>
                            </td>
                            <td>
                                <img src={'https://i.ebayimg.com/thumbs/images/g/UNAAAOSwgHxg9uaq/s-l225.webp'}
                                     alt={'#'}/>
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
                {/*<div className="container">*/}
                {/*  <input type="button" onClick="javascript: FindOnPage('text-to-find'); return false;" value="Find"/>*/}
                {/*  <input type="text" maxLength="30" placeholder="Search" className="searchbar" id="text-to-find" value="">*/}
                {/*    <img src="https://images-na.ssl-images-amazon.com/images/I/41gYkruZM2L.png" alt="search icon"*/}
                {/*         className="button">*/}
                {/*</div>*/}

                <div className="modal_container">
                    <div className="modal_box">
                        <div className="tab_container">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>Country</th>
                                    <th>Price</th>
                                    <th>OEM</th>
                                    <th>Date</th>
                                    <th>Link</th>
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
                                </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>

                </div>


            </div>

        </>


);
}

export default App;
