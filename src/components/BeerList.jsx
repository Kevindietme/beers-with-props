import { useState, useEffect } from 'react'
import BeerCard from './BeerCard'

export default function BeerList() {
  const [beers, setBeers] = useState()
  const [selectedBeer, setSelectedBeer] = useState()

  const getBeers = () => {
    fetch('https://api.sampleapis.com/beers/ale')
      .then(response => response.json())
      .then(setBeers)
      .catch(alert)
  }

  useEffect(() => { // run once on mount
    getBeers()
  }, [])

  useEffect(() => { // triggering a side-effect when selectedBeer (state) changes
    document.title = selectedBeer || "The Beers!"
  }, [selectedBeer])

  useEffect(() => { // right before component unmounts
    return () => {
      alert("Thanks for all the beers!")
    }
  }, [])

  return (
    <main>
      {selectedBeer && <h2>Selected: {selectedBeer}</h2>}
      <section className='beer-list'>
        {!beers ? (
          <h2>Loading...</h2>
        ) : (
          beers.map(beer => (
            <BeerCard
              key={beer.id}
              name={beer.name}
              image={beer.image}
              avgRating={beer.rating.average}
              setSelectedBeer={setSelectedBeer}
            />
          ))
        )}
      </section>
    </main>
  )
}
