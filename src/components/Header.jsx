import { useState } from "react"
import logoImg from '../assets/logo.png'
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

const Header = ({ label, color }) => {
    const [open, setOpen] = useState(false)

    const menuHandler = () => {
        setOpen(!open)
    }

    return (
        <AnimatePresence>
            <motion.header layoutId="header">
                <div className="container py-4">
                    <div className="row justify-content-between">
                        <div className="col-lg-auto">
                            <a href="/" className="logo"><img src={logoImg} alt="logotip" /></a>
                            <Link to="/elements/" className="back" style={{ color: color }}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" fill={color} /></svg>
                                вся линейка
                            </Link>
                        </div>
                        <div className="col-lg-auto d-flex">
                            <div className="">
                                <a href="#" className="phone">8 (800) 250-79-26</a>
                                <div>Бесплатная горячая линия</div>
                            </div>

                        </div>
                        <div className="col-lg-auto d-flex align-items-center">
                            <a href="/gde_kupit.html" className="btn btn-secondary ">Где купить</a>
                            <div className="header-menu">
                                <div className={`triger ${open ? "change" : ""}`} onClick={menuHandler}>
                                    <div className="icon">
                                        <div className="bar1"></div>
                                        <div className="bar2"></div>
                                        <div className="bar3"></div>
                                    </div>
                                    <span>Меню</span>
                                </div>
                                <ul id="hm" className={`nav ${open ? "change" : ""}`}>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#about">О продукте {label}</a>
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
                        </div>
                    </div>

                </div>
            </motion.header>
        </AnimatePresence>
    )
}

export default Header