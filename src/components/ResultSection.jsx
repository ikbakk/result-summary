import React from 'react'

const ResultSection = () => {
  return (
    <div className='flex h-full flex-col items-center gap-5 rounded-3xl bg-gradient-to-b from-light-slate-blue via-violet-blue to-light-royal-blue p-10 md:w-4/12'>
      <h3 className='text-lg font-bold text-light-lavender'>Your Result</h3>
      <div className='flex flex-col justify-center rounded-full bg-violet-blue p-10 text-center'>
        <h1 className='text-7xl font-bold text-white'>76</h1>
        <p className='text-light-lavender'>of 100</p>
      </div>
      <div className='flex w-4/5 flex-col gap-3 text-center'>
        <h2 className='text-3xl font-bold text-white'>Great</h2>
        <p className='text-light-lavender'>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  )
}

export default ResultSection
