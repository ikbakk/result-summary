import React from 'react'
import SummaryCategory from './SummaryCategory'
import reaction from '../assets/images/icon-reaction.svg'
import memory from '../assets/images/icon-memory.svg'
import verbal from '../assets/images/icon-verbal.svg'
import visual from '../assets/images/icon-visual.svg'

const data = [
  {
    category: 'Reaction',
    score: 80,
    icon: reaction
  },
  {
    category: 'Memory',
    score: 92,
    icon: memory
  },
  {
    category: 'Verbal',
    score: 61,
    icon: verbal
  },
  {
    category: 'Visual',
    score: 72,
    icon: visual
  }
]

const SummarySection = () => {
  return (
    <div className='flex h-full w-full flex-col items-center gap-5 rounded-3xl bg-white p-10 shadow-xl md:w-4/12'>
      <h3 className='w-full text-lg font-bold text-dark-gray-blue'>Summary</h3>
      {data.map((item, index) => (
        <SummaryCategory key={index} {...item} />
      ))}
      <div className='w-full py-2'>
        <button className='w-full rounded-full bg-dark-gray-blue px-5 py-3 font-semibold text-white'>
          Continue
        </button>
      </div>
    </div>
  )
}

export default SummarySection
