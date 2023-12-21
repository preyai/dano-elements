import slide1 from '../assets/slide_1.png'
import bannerText from '../assets/banner-text.png'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'

const Banner = ({ data }) => {
    return (
        <AnimatePresence>
            <motion.div className="banner" layoutId={data.id}>
                {/* <img src={slide1} alt="slide" /> */}
                <div className='bgr' style={{ backgroundColor: data.color }}>
                    <motion.div layoutId={`image-${data.id}`} className='image'>
                        <img src={data.image} alt={data.label} />
                    </motion.div>
                    <div className='text'>
                        <motion.div layoutId={`title-${data.id}`} className='title'>Danogips Elements</motion.div>
                        <motion.div layoutId={`label-${data.id}`} className='label' style={{ color: data.color }}>{data.label}</motion.div>
                        <div className='description'>{data.bannerText}</div>
                    </div>
                </div>
                <div className="container-fulid">
                    <div className="banner-text d-flex align-items-center">
                        <img src={bannerText} alt="bannerText" />
                        <div>
                            Встречайте семейство <span>Danogips Elements!</span>

                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Banner