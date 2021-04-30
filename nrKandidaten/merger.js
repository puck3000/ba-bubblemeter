const nrKandidatenMitTwitter = require('./nrKandidatenMitTwitter.json')
const politikerMitTwitterNew = require('./politikerMitTwitterNew.json')

const fs = require('fs')

console.log(politikerMitTwitterNew.length)

// delete 'smartmap' property of old Array
// const newCandidates = nrKandidatenMitTwitter.map((obj) => {
//   delete obj.smartmap
//   return obj
// })

// console.log(newCandidates)

// merge into new beautiful array

// for (candidate of newCandidates) {
//   const match = politikerMitTwitterNew.find(
//     (obj2) => obj2.smartMapId === candidate.smartMapId
//   )
//   //   console.log(match?.koordinaten)

//   kandidaten.push({
//     ...candidate,
//     smartmap: match?.koordinaten,
//   })
// }

// console.log(kandidaten.length)

// // fs.writeFileSync('newCandidatesList', JSON.stringify(newArr))
// console.log(kandidaten)
