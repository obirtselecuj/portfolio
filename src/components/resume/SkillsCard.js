import React from 'react'
import { motion } from 'framer-motion';
const SkillsCard = ({ item: { title, description, icon,percent } }) => {
    return (
        <div className='overflow-x-hidden'>
            <p className='text-sm font-medium uppercase '>{title}</p>
            <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
                <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    style={{ width: `${percent}%`, height: '100%' }}
                    className={` h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative`}
                >
                    <span className='absolute -top-7 right-0'>{parseInt(percent)}%</span>
                </motion.span>
            </span>
            {/* <p>{description}</p> */}
        </div>
    );
}

export default SkillsCard