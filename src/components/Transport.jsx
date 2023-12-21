import { motion } from 'framer-motion'

const Transport = ({ label, text, color }) => {
    return (
        <motion.div
            id="usloviya"
            className="mt-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <style>
                {`
                .jet-header h3 {
                background-image: -webkit-linear-gradient(
                    180deg,
                    ${color} 58%,
                    rgb(255, 255, 255) 58%
                  );
                  background-image: -moz-linear-gradient(
                    180deg,
                    ${color} 58%,
                    rgb(255, 255, 255) 58%
                  );
                  background-image: linear-gradient(
                    180deg,
                    ${color} 58%,
                    rgb(255, 255, 255) 58%
                  );
                  }
                .jet-header::before {
                    background-color:${color};
                }
                `}
            </style>
            <div className="container">
                <h2>Условия хранения и транспортировки</h2>
                <div className="row">
                    <div className="col-sm-12 jet-header">
                        <motion.h3
                            initial={{ rotateX: '180deg' }}
                            whileInView={{ rotateX: '0deg' }}
                            transition={{ duration: .5 }}
                            viewport={{ once: true }}
                        >
                            Elements Финиш
                        </motion.h3>
                        <p>
                            Срок хранения шпатлевки 12 месяцев с даты производства (дата
                            производства указана на ведре)
                        </p>
                        <p>Храните шпатлевку в ведрах с плотно закрытой крышкой</p>
                        <p>
                            Предохраняйте ведро со шпатлевкой от чрезмерного нагрева и
                            хранения под прямым солнечным светом
                        </p>
                        <p>
                            Рекомендуется хранение в сухом помещении при температуре выше 0°
                            C
                        </p>
                        <p>
                            Допускается замораживание/размораживание. Выдерживает не менее 5
                            циклов
                        </p>
                        <p>
                            Нельзя ускорять процесс оттаивания с помощью нагревательных
                            приборов. Размораживать при комнатной температуре. После
                            размораживания тщательно перемешать миксером
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Transport