import { motion } from 'framer-motion'

const Characteristics = ({ data }) => {
    return (
        <div className="container mt-5" id="texnicheskie-xarakteristiki">
            <h2>характеристики</h2>
            <div className="pr-table row">
                {data.map(item => (
                    <>
                        <motion.div
                            initial={{ transform: 'translateX(-100%)' }}
                            whileInView={{ transform: 'translateX(0)' }}
                            viewport={{ once: true }}
                            className="col-12 col-lg-6 dots"
                        >
                            {item.label}
                        </motion.div>
                        <motion.div
                            initial={{ transform: 'translateX(100%)' }}
                            whileInView={{ transform: 'translateX(0)' }}
                            viewport={{ once: true }}
                            className="col-12 col-lg-6 parall"
                        >
                            {item.value}
                        </motion.div>
                    </>
                ))}
            </div>
        </div>
    )
}

export default Characteristics