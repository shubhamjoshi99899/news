import React from 'react'

const Map = () => {
    const cars = [
        {
          "name": "alto",
          "color": "purple",
          "type": "minivan",
          "registration": "new Date('2017-01-03')",
          "capacity": '7'
        },
        {
            "name": "wagonr",
          "color": "red",
          "type": "station wagon",
          "registration": "new Date('2018-03-03')",
          "capacity": '5'
        }
    ]
  return (
      
    <div>
        <div className="card">
            <ul>
                {cars.map(car=>(
                    <li key={car.id}>{car.name}<br/>{car.color} <br /> {car.type} <br /> {car.registration} <br /> {car.capacity}  </li>
                    
                    
                ))}
                
            </ul>

        </div>
    </div>
  )
}

export default Map