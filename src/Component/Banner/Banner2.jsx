import React from 'react'
// import { GrUserExpert } from 'react-icons/gr'
// import { MdOutlineAccessTime } from 'react-icons/md'
// import { FaBookReader } from 'react-icons/fa'
// import { BsFillCalendar3WeekFill } from 'react-icons/bs'
// import {FadeUp} from '../Hero/Hero'
import { motion } from 'framer-motion'
import BannerPng from '../../assets/banner.png'
import { FaBookReader } from 'react-icons/fa'
import { FadeUp } from '../Hero/Hero'
import { GrUserExpert } from 'react-icons/gr'
import { MdOutlineAccessTime } from 'react-icons/md'
const Banner2 = () => {
  return (
    <section>
        <div className='container py-14 md:py-24 grid grid-cols-2 gap-8 space-y-6 md:space-x-0'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
             <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            <h1 className="text-4xl font-bold !leading-snug">
              Join Our Community to Start your Journey
            </h1>
            <p className="text-dark2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis
              incidunt!
            </p>
            <a
              href="https://chat.whatsapp.com/FQSKgJ5f1eIAhlyF5sVym0"
              className="primary-btn !mt-8"
            >
              Join Now
            </a>
          </div>
        </motion.div>
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={BannerPng}
            alt=""
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>
        </div>
    </section>
  )
}

export default Banner2