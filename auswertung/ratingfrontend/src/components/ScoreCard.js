import React from 'react'

function ScoreCard({ score }) {
  // Resultate für die Darstellung aufbereiten
  const stats = [
    {
      name: 'Hits',
      value: score.nrOfHits,
      tweetDepth: score.tweetDepth,
      perc: score.nrOfHits / score.tweetDepth,
      color: 'turquoise',
    },
    {
      name: 'CloseOnes',
      value: score.nrOfCloseOnes,
      tweetDepth: score.tweetDepth,
      perc: score.nrOfCloseOnes / score.tweetDepth,
      color: 'limegreen',
    },
    {
      name: 'CloseOnes',
      value: score.nrOfMatches,
      tweetDepth: score.tweetDepth,
      perc: score.nrOfMatches / score.tweetDepth,
      color: 'hotpink',
    },
  ]

  return <article>Scorecard</article>
}

export default ScoreCard
