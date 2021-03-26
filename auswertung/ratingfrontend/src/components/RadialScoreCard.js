import React from 'react'
import { PolarAngleAxis, RadialBar, RadialBarChart } from 'recharts'

function RadialScoreCard({ score }) {
  const circleSize = 300
  // Resultate für die Darstellung aufbereiten
  const stats = [
    {
      name: 'Hits',
      value: score.nrOfHits,
      tweetDepth: score.tweetDepth,
      perc: score.nrOfHits / score.tweetDepth,
      fill: '#40e0d0',
    },
    {
      name: 'CloseOnes',
      value: score.nrOfCloseOnes,
      tweetDepth: score.tweetDepth,
      perc: score.nrOfCloseOnes / score.tweetDepth,
      fill: '#32cd32',
    },
    {
      name: 'CloseOnes',
      value: score.nrOfMatches,
      tweetDepth: score.tweetDepth,
      perc: score.nrOfMatches / score.tweetDepth,
      fill: '#ff69b4',
    },
  ]

  return (
    <article>
      <RadialBarChart
        width={circleSize}
        height={circleSize}
        innerRadius='60%'
        outerRadius='80%'
        data={stats}
        startAngle={90}
        endAngle={-270}
      >
        <PolarAngleAxis
          type='number'
          domain={[0, 15]}
          angleAxisId={0}
          tick={false}
        />
        <RadialBar
          background
          clockWise
          dataKey='value'
          cornerRadius={circleSize / 2}
        />
        <text
          x={circleSize / 2}
          y={circleSize / 2}
          textAnchor='middle'
          dominantBaseline='middle'
          className='progress-label'
        >
          {score.score}
        </text>
      </RadialBarChart>
    </article>
  )
}

export default RadialScoreCard
