import React from 'react'
import { PolarAngleAxis, RadialBar, RadialBarChart } from 'recharts'

function RadialScoreValue({ score }) {
  const circleSize = 150
  const maxScore = 256
  // Resultate für die Darstellung aufbereiten

  const stats = [
    {
      name: 'Score',
      value: score.score,
      fill: '#BE185D',
      result: `${score.score} Main Score`,
    },
  ]

  return (
    <RadialBarChart
      width={circleSize}
      height={circleSize}
      innerRadius='75%'
      outerRadius='90%'
      data={stats}
      startAngle={90}
      endAngle={-270}
    >
      <PolarAngleAxis
        type='number'
        domain={[0, maxScore]}
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
  )
}

export default RadialScoreValue
