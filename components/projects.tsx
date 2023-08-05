'use client'

import React, { useEffect } from 'react'
import Project from './project'
import SectionHeading from './sectionHeading'
import useSectionInView from '@/lib/hook'
import { projectsData } from '@/lib/data'

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5)
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}