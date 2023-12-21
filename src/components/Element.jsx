import { useNavigate } from "react-router-dom"
import { AnimatePresence, motion } from 'framer-motion'

const Element = ({ item }) => {

    const navigate = useNavigate()

    const handleElementClick = () => {
        navigate(`/elements/${item.id}`)
    }

    return (
        <AnimatePresence>
            <motion.div layoutId={item.id} whileHover={{flex:1.5}} className='element' style={{ backgroundColor: item.color }} onClick={handleElementClick} >
                <motion.div layoutId={`title-${item.id}`} className='title'>
                    elements
                    <motion.div layoutId={`label-${item.id}`} className='label' style={{ color: item.color }}>{item.label}</motion.div>
                </motion.div>

                <div className='more'>Подробнее</div>

                <motion.div layoutId={`image-${item.id}`} className='image'>
                    <img src={item.image} alt={item.label} />
                </motion.div>
            </motion.div >
        </AnimatePresence>
    )
}


export default Element