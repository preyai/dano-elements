
import { useNavigate } from 'react-router-dom'
import logoImg from '../assets/logo.png'
import Element from './Element'
import { motion, AnimatePresence } from "framer-motion"



const Start = ({ data, handler }) => {
    return (

        <div className='start'>
            <AnimatePresence>
                <motion.header layoutId='header' className="start-header">
                    выберите продукт:
                    <img src={logoImg} alt="danogips" />
                </motion.header>
            </AnimatePresence>
            <div className='start-list'>
                {data.map(item => (
                    <Element item={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default Start