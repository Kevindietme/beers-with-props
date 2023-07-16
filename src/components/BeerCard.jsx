import { useState } from "react";

export default function BeerCard({ name, image, avgRating, setSelectedBeer }) {
  const [hidden, setHidden] = useState(false)
  if(hidden) return null
  return (
    <div className="beer-card" onClick={() => setSelectedBeer(name)}>
      <div className="close-button" onClick={() => setHidden(true)}>x</div>
      <div className="beer-image">
        <img src={image} alt={name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://www.totalwine.com/media/sys_master/cmsmedia/hff/h0e/8979036078110.png'
          }}
        />
      </div>
      <h2>{name}</h2>
      <div className="rating">
        <p className="grey-stars">⭐️⭐️⭐️⭐️⭐️</p>
        <p className="yellow-stars" style={{ width: avgRating + 'em'}}>⭐️⭐️⭐️⭐️⭐️</p>
      </div>
    </div>
  )
}