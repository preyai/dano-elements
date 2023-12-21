import { motion } from 'framer-motion'

const Advantages = ({ data, color }) => {
    return (
        <>
            <style>
                {`
                    .advants ul li .img-box::before {
                        background-color: ${color}
                    }
                `}
            </style>
            <div className="advants mt-5">
                <div className="container">
                    <h2 className="mb-4">Преимущества:</h2>
                    <ul>
                        {data.map(item => (
                            <motion.li
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                <div className="img-box">
                                    <img src={item.image} alt={item.text} />
                                </div>
                                <div className="text-box">
                                    {item.text}
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Advantages