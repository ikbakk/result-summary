import React from 'react'

const SummaryCategory = ({ category, icon, score }) => {
  let bg

  if (category === 'Reaction') {
    bg = 'bg-light-red/10 text-light-red'
  }
  if (category === 'Memory') {
    bg = 'bg-orange-yellow/10 text-orange-yellow'
  }
  if (category === 'Verbal') {
    bg = 'bg-green-teal/10 text-green-teal'
  }
  if (category === 'Visual') {
    bg = 'bg-cobalt-blue/10 text-cobalt-blue'
  }

  return (
    <div className={`${bg} flex w-full justify-between rounded-xl p-3`}>
      <div className='flex items-center gap-2'>
        <div>
          <img src={icon} alt='icon' />
        </div>
        <div className={`font-semibold`}>{category}</div>
      </div>
      <div className='font-semibold text-dark-gray-blue'>
        {score}
        <span className='text-light-lavender'> / 100</span>
      </div>
    </div>
  )
}

export default SummaryCategory
