import Banner from "./Banner"
import Description from "./Description"
import Header from "./Header"
import Characteristics from "./Characteristics"
import Advantages from "./Advantages"
import finishImg from '../assets/finish.png'
import adv1 from '../assets/a1.png'
import adv2 from '../assets/a2.png'
import adv3 from '../assets/a3.png'
import adv4 from '../assets/a4.png'
import adv5 from '../assets/a5.png'
import Instructions from "./Instructions"
import Transport from "./Transport"
import { useParams } from "react-router-dom"
import Element from "./Element"


const Main = ({ _data }) => {
    let { id } = useParams()
    const data = _data.find(i => i.id === id)

    return (
        <>
            <Header label={data.label} color={data.color} />
            <Banner data={data} />
            {/* <Element item={data} /> */}
            <Description
                data={data}
            />
            <Characteristics
                data={data.characteristics}
            />
            <Advantages
                data={data.advantages}
                color={data.color}
            />
            <Instructions
                data={data.instructions}
            />
            <Transport color={data.color} label={data.label} text={data.transport} />

            <>
                <section id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-6 form">
                                <h2 className="my-5">Есть вопросы? Напишите нам!</h2>
                                <form method="post" id="formland">
                                    <div className="row">
                                        <div className="col-12">
                                            <input className="form-control" type="text" name="name" placeholder="Введите ваше имя" required />
                                        </div>
                                        <div className="col-6">
                                            <input className="form-control" type="phone" name="phone" placeholder="+7 ___-___-__" required />
                                        </div>
                                        <div className="col-6">
                                            <input className="form-control" type="email" name="email" placeholder="Ваш e-mail" required />
                                        </div>
                                        <div className="col-12">
                                            <select className="form-control" name="region" required>
                                                <option value="" disabled selected>Выберите регион</option>
                                                <option value="Архангельская область">Архангельская область</option>

                                                <option value="Астраханская область">Астраханская область</option>

                                                <option value="Белгородская область">Белгородская область</option>

                                                <option value="Брянская область">Брянская область</option>

                                                <option value="Владимирская область">Владимирская область</option>

                                                <option value="Волгоградская область">Волгоградская область</option>

                                                <option value="Вологодская область">Вологодская область</option>

                                                <option value="Воронежская область">Воронежская область</option>

                                                <option value="Дагестан">Дагестан</option>

                                                <option value="Дальний Восток">Дальний Восток</option>

                                                <option value="Забайкальский край">Забайкальский край</option>

                                                <option value="Ивановская область">Ивановская область</option>

                                                <option value="Иркутская область">Иркутская область</option>

                                                <option value="Калининградская область">Калининградская область</option>

                                                <option value="Калужская область">Калужская область</option>

                                                <option value="Кемеровская Область">Кемеровская Область</option>

                                                <option value="Кировская область">Кировская область</option>

                                                <option value="Костромская область">Костромская область</option>

                                                <option value="Краснодарский край">Краснодарский край</option>

                                                <option value="Красноярский край">Красноярский край</option>

                                                <option value="Курганская область">Курганская область</option>

                                                <option value="Курская область">Курская область</option>

                                                <option value="Ленинградская область">Ленинградская область</option>

                                                <option value="Липецкая область">Липецкая область</option>

                                                <option value="Москва">Москва</option>

                                                <option value="Московская область">Московская область</option>

                                                <option value="Мурманская область">Мурманская область</option>

                                                <option value="Нижегородская область">Нижегородская область</option>

                                                <option value="Новгородская область">Новгородская область</option>

                                                <option value="Новосибирская область">Новосибирская область</option>

                                                <option value="Омская область">Омская область</option>

                                                <option value="Оренбургская область">Оренбургская область</option>

                                                <option value="Орловская область">Орловская область</option>

                                                <option value="Пензенская область">Пензенская область</option>

                                                <option value="Пермский край">Пермский край</option>

                                                <option value="Приморский край">Приморский край</option>

                                                <option value="Псковская область">Псковская область</option>

                                                <option value="Республика Адыгея">Республика Адыгея</option>

                                                <option value="Республика Алтай">Республика Алтай</option>

                                                <option value="Республика Башкортостан">Республика Башкортостан</option>

                                                <option value="Республика Карелия">Республика Карелия</option>

                                                <option value="Республика Коми">Республика Коми</option>

                                                <option value="Республика Крым">Республика Крым</option>

                                                <option value="Республика Марий Эл">Республика Марий Эл</option>

                                                <option value="Республика Мордовия">Республика Мордовия</option>

                                                <option value="Республика Северная Осетия">Республика Северная Осетия</option>

                                                <option value="Республика Татарстан">Республика Татарстан</option>

                                                <option value="Республика Удмуртия">Республика Удмуртия</option>

                                                <option value="Республика Удмуртия">Республика Удмуртия</option>

                                                <option value="Ростовская область">Ростовская область</option>

                                                <option value="Рязанская область">Рязанская область</option>

                                                <option value="Самарская область">Самарская область</option>

                                                <option value="Санкт-Петербург">Санкт-Петербург</option>

                                                <option value="Саратовская область">Саратовская область</option>

                                                <option value="Саратовская область">Саратовская область</option>

                                                <option value="Свердловская область">Свердловская область</option>

                                                <option value="Смоленская область">Смоленская область</option>

                                                <option value="Ставропольский край">Ставропольский край</option>

                                                <option value="Тамбовская область">Тамбовская область</option>

                                                <option value="Тверская область">Тверская область</option>

                                                <option value="Томская область">Томская область</option>

                                                <option value="Тульская область">Тульская область</option>

                                                <option value="Тюменская область">Тюменская область</option>

                                                <option value="Ульяновская область">Ульяновская область</option>

                                                <option value="Хабаровский край">Хабаровский край</option>

                                                <option value="ХМАО">ХМАО</option>

                                                <option value="Челябинская область">Челябинская область</option>

                                                <option value="Чувашская Республика">Чувашская Республика</option>

                                                <option value="Ярославская область">Ярославская область</option>


                                            </select>
                                        </div>
                                        <input id="furl" name="furl" type="hidden" value="" />
                                        <div className="col-12">
                                            <textarea className="form-control" name="messag" rows="3" placeholder="Введите ваше сообщение"></textarea>
                                        </div>
                                        <div className="col-auto">
                                            <div className="form-check d-flex align-items-center">
                                                <input className="form-check-input" type="checkbox" name="agree" value="" id="agreement" checked />
                                                <label className="form-check-label" htmlFor="agreement">Я согласен на обработку <br /><a href="/politika_konfidenczialnosti.html" target="_blank">персональных данных</a></label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div id="g-recaptcha"></div>
                                        </div>
                                        <div className="col-12 d-flex">
                                            {/* <p className="success" >
                                                    Ваша заявка успешно отправлена! Мы свяжемся с вами в
                                                    ближайшее время
                                                </p> */}
                                            <button type="button" className="btn btn-secondary">
                                                Отправить
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col col-lg-6 pr-mail"></div>
                        </div>
                    </div>
                </section>

                <footer>
                    <div className="container py-4">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-auto">
                                <a href="/" className="logo"><img src="//danogips.ru/sf/img/logo.png" alt="logotip" /></a>
                                <div className="footer-social">
                                    <a href="https://vk.com/public149804744" className="footer-social__a">
                                        <img src="//danogips.ru/GidroFlex/img/footer/vk.svg" alt="vk" />
                                    </a>

                                    <a href="https://www.youtube.com/channel/UC99IYXRv42a_ccQ99_4HBEw" className="footer-social__a">
                                        <img src="//danogips.ru/GidroFlex/img/footer/youtube.svg" alt="YouTube" />
                                    </a>

                                    <a href="https://t.me/danogips_russia" className="footer-social__a">
                                        <img src="//danogips.ru/GidroFlex/img/footer/telegram.svg" alt="telegram" />
                                    </a>


                                </div>
                            </div>
                            <div className="col-lg-auto">
                                <p>
                                    © 2023 Danogips ® <br />
                                    ООО «КГ Строй Системы» <br />
                                    192102, Россия, г. Санкт-Петербург, <br />
                                    ул. Салова д. 45, лит. Ж ПОМ/КОМ, 1-Н/17
                                </p>
                            </div>
                            <div className="col-lg-auto">
                                <ul className="nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#about">О продукте Elements {data.label}</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#texnicheskie-xarakteristiki">Технические характеристики</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#instrukciya">Инструкция по применению</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#usloviya">Условия хранения и транспортировки</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/politika_konfidenczialnosti.html">Политика конфиденциальности</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-auto">
                                <a href="#" className="phone">8 (800) 250-79-26</a>
                                <div>Бесплатная горячая линия</div>
                                <a href="/gde_kupit.html" className="btn btn-secondary">Где купить</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        </>
    )
}

export default Main