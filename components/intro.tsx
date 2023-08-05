'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'
import { useActiveSectionContext } from '@/context/activeSectionContext'
import useSectionInView from '@/lib/hook'
import avatar from '@/public/IMG_5038-min.png'

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5)
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  return (
    <section ref={ref} id="home" className="mb-2 max-w-[50rem] text-center sm:mb-0 scroll-mt-28">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2
            }}
          >
            <Image
              src={avatar}
              alt='sanghel portrait'
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] object-cover border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className=" absolute text-4xl bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7
            }}
          >
            👋🏼
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi, I&apos;m Sanghel Gonzalez.</span> 
        <br />
        I&apos;m a{" "}
        <span className="font-bold">front-end developer</span>
        <br />
        with{" "}
        <span className="font-bold">+1 year</span> of experience. I enjoy
        building <span className="italic">sites</span>. My focus is{" "}
        <span className="font-bold">React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-5 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover-bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact")
            setTimeOfLastClick(Date.now())
          }}
        >
          Contact me here
          <BsArrowRight className="group-hover:translate-x-1 transition opacity-80" />
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/sanghelCV.pdf"
          download={true}
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:animate-bounce transition" />
        </a>
        <div className="flex items-center justify-center gap-5">
          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://linkedin.com/in/sanghel-manuel-gonzalez-martínez-32181b223"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10  dark:text-white/60"
            href="https://github.com/Sanghel"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
