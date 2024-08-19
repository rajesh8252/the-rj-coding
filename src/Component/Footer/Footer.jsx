import React from 'react'
import { FaInstagram, FaWhatsapp, FaYahoo } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'
import {motion} from "framer-motion"
const Footer = () => {
  return (
    <footer className='py-28 bg-[#f7f7f7]'>
        <motion.div 
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        className='container'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14  md:gap-4'>
                    {/* First Section */}
                    <div className='space-y-4 max-w-[300px]'>
                        <h1 className='text-2xl font-bold'>The RJ Coding</h1>
                        <p className='text-dark2'> RJ is a platform dedicated to empowering aspired Developers.
                            From beginner to advanced programming concepts,we provide comprehensive learning experience designed to helped you master the coding skills and build tech projects and tech career
                        </p>
                    </div>
                    {/* Second Section */}
                    <div className='grid grid-cols-2 gap-10'>
                          <div className='space-y-4'>
                                <h1 className='text-2xl font-bold'>Courses</h1>
                                <div className='text-dark2'>
                                  <ul className='space-y-2 text-lg'>
                                    <li className='cursor-pointer hover:text-secondary duration-200'>Web Development</li>
                                    <li className='cursor-pointer hover:text-secondary duration-200'>Software Development</li>
                                    <li className='cursor-pointer hover:text-secondary duration-200'>App Development</li>
                                    <li className='cursor-pointer hover:text-secondary duration-200'>E-learning</li>
                                    <li className='cursor-pointer hover:text-secondary duration-200'>Web Development</li>
                                     
                                  </ul>
                                </div>
                          </div>
                           <div className='space-y-4'>
                                <h1 className='text-2xl font-bold'>Links</h1>
                                <div className='text-dark2'>
                                  <ul className='space-y-2 text-lg'>
                                    <li className='cursor-pointer hover:text-secondary duration-200'>Home</li>
                                    <li className='cursor-pointer hover:text-secondary duration-200'>Services</li>
                                    <li className='cursor-pointer hover:text-secondary duration-200'>About</li>
                                    <li className='cursor-pointer hover:text-secondary duration-200'>Contact</li>
                                  </ul>
                                </div>
                          </div>
                    </div>
                         
                    {/* Third Section */}
                    <div className='space-y-4 max-w-[300px]'>
                      <h1 className='text-2xl font-bold'>Get in touch</h1>
                      <div className='flex items-center'>
                        <input
                        type='text'
                        placeholder='Enter the Email'
                        className='p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2'
                        />
                        <button className='bg-primary text-white font-semibold py-4 px-6 rounded-e-xl'>Go</button>
                      </div> {/* Social Media icons */}
                           <div className='flex space-x-6 py-3'>
                            <a href='#'>
                              <FaWhatsapp className='cursor-pointer hover:text-primary hover:scale-105 duration-200'/>
                            </a>
                            <a href='#'>
                              <FaInstagram className='cursor-pointer hover:text-primary hover:scale-105 duration-200'/>
                            </a>
                            <a href='#'>
                              <TbWorldWww className='cursor-pointer hover:text-primary hover:scale-105 duration-200'/>
                            </a>
                            <a href='#'>
                              <FaYahoo className='cursor-pointer hover:text-primary hover:scale-105 duration-200'/>
                            </a>
                    </div>
                    </div>
                   
                </div>
        </motion.div>
    </footer>
  )
}

export default Footer