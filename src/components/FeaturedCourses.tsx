'use client';

import React from 'react'
import courseData from '../data/music_courses.json'
import Link from 'next/link'
import { Button } from './ui/moving-border'
import { BackgroundGradient } from './ui/background-gradient';


interface Course {
            id: number,
            title: string,
            slug: string,
            description: string,
            price: number,
            instructor: string,
            isFeatured: boolean,
}

const FeaturedCourses = () => {

    const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured)

  return (
    <div className='py-12 bg-gray-900'>
      <div>
        <div className='text-center'>
            <h2 className="text-lg font-semibold uppercase tracking-wide text-teal-600">
                Featured Courses
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Learn with the Best
            </p>
        </div>
      </div>
      <div className='mt-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
            {featuredCourses.map((course:Course) => (
                <div key={course.id} className='flex justify-center'>
                    <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                        <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                            <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                {course.title}
                            </p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                                {course.description}
                            </p>
                            <Link 
                                href={`/courses/${course.slug}`}
                                className='mt-4'>
                                Learn More
                            </Link>
                        </div>
                    </BackgroundGradient>
                </div>
            ))}
        </div>

      </div>
      <div className='mt-20 text-center'>
        <Link href={'/courses'}>
            <button className='py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-zinc-500 text-zinc-400 hover:border-zinc-400 hover:text-zinc-400 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'>
                View All Courses
            </button>
        </Link>
      </div>
    </div>
  )
}

export default FeaturedCourses