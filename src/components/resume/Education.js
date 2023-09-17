import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';
import { resumeData } from "../../data/resume-data";
const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className='w-full flex flex-col lgl:flex-row gap-10 lgl:gap-10'>
      <div>
        <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
          <h2 className='text-3xl md:text-4xl font-bold'>Education Quality</h2>
        </div>
        <div className='mt-6 lgl:mt-5 w-full   border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
          {resumeData.education.map((item) => (
            <ResumeCard item={item} key={item.id} />
          ))}
        </div>
      </div>

    </motion.div>
  );
}

export default Education