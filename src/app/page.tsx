import Choices from '@/components/Choices/Choices'
import Leaderboard from '@/components/Leaderboard'
import React from 'react'

function page() {
  return (
    <div className='bg-black'>
      <Choices />
      <Leaderboard />
    </div>
  )
}

export default page