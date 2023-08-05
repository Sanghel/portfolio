'use client'

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeading from './sectionHeading'
import useSectionInView from '@/lib/hook'
import { useActiveSectionContext } from '@/context/activeSectionContext'

export default function About() {
  const { ref } = useSectionInView("About")
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After graduating as an{" "}
        <span className="font-medium">Engineer</span>, and with little knowledge in web development at that time, I became passionate about technologies and the way in which software is built, I became self-taught. I learned the basic knowledge of HTML, CSS and JavaScript in 6 months, and it took me 6 more months to specialize in React JS with a little TypeScript.
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Tailwind CSS
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a front-end
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, play soccer, play table tennis and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new technologies</span>. I am currently
        learning about{" "}
        <span className="font-medium">React Native and Swift</span>.
      </p>
    </motion.section>
  )
}
