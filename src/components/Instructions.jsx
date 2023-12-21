import { useState } from "react"
import { motion } from 'framer-motion'

const Instructions = ({ data }) => {
    return (
        <div id="instrukciya" className="instructions">
            <div className="container">
                <h2>инструкция по применению</h2>
                {data.map((item, index) => (
                    <Pan data={item} index={index + 1} key={index} />
                ))}
            </div>
        </div>
    )
}

const Pan = ({ data, index }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className={`pan ${open ? 'active' : ''}`}>
            <div className="pan-head" onClick={() => setOpen(!open)}>
                <motion.div
                    className="number"
                    initial={{ transform: 'translateX(-100%)' }}
                    whileInView={{ transform: 'translateX(0)' }}
                    viewport={{ once: true }}
                >
                    {index}
                </motion.div>
                <motion.div
                    initial={{ transform: 'translateX(100%)' }}
                    whileInView={{ transform: 'translateX(0)' }}
                    viewport={{ once: true }}
                    className="title"
                >
                    {data.label}
                    <div className="arrow">
                        <svg id="SVGDoc" width="20" height="12" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 20 12">
                            <path d="M18.99092,10.99974v0l-8.99094,-8.99118v0l-8.99105,8.99118v0" fillOpacity="0" strokeDashoffset="0" strokeDasharray="" strokeLinejoin="miter" strokeLinecap="butt" strokeOpacity="1" strokeMiterlimit="20" strokeWidth="3"></path>
                        </svg>
                    </div>
                </motion.div>
            </div>
            <div className="pan-body">
                <div className="row">
                    {data.text}
                </div>

            </div>
        </div>
    )
}

export default Instructions