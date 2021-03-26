import React from 'react'
import RadialScoreValue from './RadialScoreValue'
import ScoreBars from './ScoreBars'

function ScoreCard({ query, dummyData }) {
  const barData = [
    {
      name: 'matches',
      value: dummyData.score.nrOfMatches,
      fill: '#FFCAAF',
    },
    {
      name: 'closeOnes',
      value: dummyData.score.nrOfCloseOnes,
      fill: '#8D5B4C',
    },
    { name: 'hits', value: dummyData.score.nrOfHits, fill: '#5A2A27' },
  ]
  return (
    <div className='p-2 mb-2 md:mb-0 border-2 border-pink-700'>
      <h2 className='text-pink-700'>"{query}"</h2>
      <div className='grid grid-cols-2'>
        <h3>Score:</h3>
        <RadialScoreValue score={dummyData.score} />
      </div>
      <div>
        <ScoreBars barData={barData} />
      </div>
    </div>
  )
}

export default ScoreCard
