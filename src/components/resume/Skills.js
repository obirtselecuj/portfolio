import React from 'react'
import { motion } from 'framer-motion';
import { resumeData } from "../../data/resume-data";
import SkillsCard from './SkillsCard';
const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >

      <div className='w-full lgl:w-1/3'>
        <div className='py-12 font-titleFont flex flex-col gap-4'>
          <p className='text-sm text-designColor tracking-[4px] uppercase'>
            Features
          </p>
          <h2 className='text-3xl md:text-3xl font-bold'>Frontend Skills</h2>
        </div>
        <div className='w-full flex flex-col gap-6'>
          {resumeData.frontend.map((item) => (
            <SkillsCard item={item} key={item.id} />
          ))}
        </div>
      </div>
      <div className='w-full lgl:w-1/3'>
        <div className='py-12 font-titleFont flex flex-col gap-4'>
          <p className='text-sm text-designColor tracking-[4px] uppercase'>
            Features
          </p>
          <h2 className='text-3xl md:text-3xl font-bold'> Backend Skills</h2>
        </div>
        <div className='w-full flex flex-col gap-6'>
         
           {resumeData.backend.map((item) => (
            <SkillsCard item={item} key={item.id} />
          ))}
        </div>
      </div>
      <div className='w-full lgl:w-1/3'>
        <div className='py-12 font-titleFont flex flex-col gap-4'>
          <p className='text-sm text-designColor tracking-[4px] uppercase'>
            Features
          </p>
          <h2 className='text-3xl md:text-3xl font-bold'>Full-Stack Skills</h2>
        </div>
        <div className='w-full flex flex-col gap-6'>
         {resumeData.fullstack.map((item) => (
            <SkillsCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills