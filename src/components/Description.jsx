import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const Description = ({ data }) => {
    const containerRef = useRef(null)
    const [top, setTop] = useState(0)
    const [left, seLeft] = useState(0)

    useEffect(() => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect()
            setTop(rect.top)
            seLeft(rect.left)
        }
    }, []) // Пустой массив зависимостей, чтобы эффект выполнился один раз после монтирования компонента

    return (
        <div className="container mt-5" id="about">
            <div className="description">
                <h1>Danogips Elements <span style={{ backgroundColor: data.color }}>{data.label}</span></h1>
                <div className="content">
                    <div className='animate-container' ref={containerRef}>
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            // layoutId={data.id}
                            // initial={{ borderRadius: 0, width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0 }}
                            // animate={{ borderRadius: '50%', width: 400, height: 400, top, left }}
                            // transition={{ duration: .5 }}
                            className="image"
                            style={{ backgroundColor: data.color }}
                        >
                            <img src={data.image} alt={data.label} />
                        </motion.div>
                    </div>
                    <motion.div
                        className="text"
                        initial={{ transform: 'translateX(100%)' }}
                        whileInView={{ transform: 'translateX(0)' }}
                        viewport={{ once: true }}
                    >
                        {data.description}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Description