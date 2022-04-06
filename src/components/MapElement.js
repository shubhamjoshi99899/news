import React, {useState} from 'react'

const MapElement = () => {
    const items =[
        {
            "name": "alto",
            "color": "purple",
            "type": "minivan",
            "registration": "new Date('2017-01-03')",
            "capacity": '7'

    },
    {
        "name": "wagonr",
            "color": "purple",
            "type": "minivan",
            "registration": "new Date('2017-01-03')",
            "capacity": '7'
    }
    ]
    const [car, setCar] = useState([]);
  return (
    <div>
        <ul>
            {items.map(item=>(
                <li key={item.name}>{item.capacity}</li>
            ))}
            <button>Delete</button>
        </ul>
    </div>
  )
}

export default MapElement