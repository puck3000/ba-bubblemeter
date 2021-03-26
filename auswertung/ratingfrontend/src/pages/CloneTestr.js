import React from 'react'
import RadialScoreValue from '../components/RadialScoreValue'
import ScoreBars from '../components/ScoreBars'
import ScoreCard from '../components/ScoreCard'

// DummyData from rating-Response:
const dummyData = {
  originalTweeter: '@Original',
  cloneTweeter: '@Clone',
  score: {
    tweetDepth: 15,
    score: 232,
    nrOfHits: 15,
    nrOfCloseOnes: 4,
    nrOfMatches: 11,
    comparison: {
      hits: [3, 2, 1, 0, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      matches: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      closeOnes: [3, 2, 1, 0],
    },
  },
  queries: [
    'sauberes Trinkwasser',
    'Subventionen für den Pestizideinsatz',
    'Covid-19-Gesetz',
    'Covid-19 Verordnungen Bundesrat',
    'Verminderung von Treibhausgasemissionen',
    'CO2-Gesetz',
    'Bekämpfung von Terrorismus',
    'Polizeiliche Massnahmen zur Bekämpfung von Terrorismus',
    'Verhüllungsverbot',
    'Burkaverbot',
  ],
}
const barData = [
  {
    name: 'matches',
    value: dummyData.score.nrOfMatches,
    fill: '#FFCAAF',
  },
  { name: 'closeOnes', value: dummyData.score.nrOfCloseOnes, fill: '#8D5B4C' },
  { name: 'hits', value: dummyData.score.nrOfHits, fill: '#5A2A27' },
]

function CloneTestr() {
  return (
    <>
      <section>
        <ul className='mb-2 py-2 border-b-2 border-pink-700'>
          <li className='flex justify-between lg:w-1/4'>
            Original Account Handle:
            <pre className='text-pink-700'>{dummyData.originalTweeter}</pre>
          </li>

          <li className='flex justify-between lg:w-1/4'>
            Clone Account Handle:
            <pre className='text-pink-700'>{dummyData.cloneTweeter}</pre>
          </li>
        </ul>
        <div className='mb-4 pb-4 border-b-2 border-pink-700 md:grid md:grid-cols-2'>
          <div className='grid grid-cols-2 items-start'>
            <h2 className=''>Main Score:</h2>
            <RadialScoreValue score={dummyData.score} />
          </div>
          <ScoreBars barData={barData} />
        </div>
        <h2 className='mb-4'>Resultate nach Suchbegriff:</h2>
        <div className='grid md:gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
          {dummyData.queries.map((query) => {
            return <ScoreCard key={query} query={query} dummyData={dummyData} />
          })}
        </div>
      </section>
      <footer></footer>
    </>
  )
}

export default CloneTestr
