import React from 'react'
import { useSelector } from 'react-redux'
import StateCard from '../components/stateCard'

const Home = () => {
  const conditions = useSelector(state => state.location)

  console.log(conditions.isLoading)

  let id = 0;

  return (
    <div className="home">
      <div className="h6 text-light text-center py-4 mb-5">State / Province</div>
      <div className="grid-section pb-4">
        {conditions.isLoading && <p>Loading resource...</p>}
        {conditions.err && <p>{conditions.err}</p>}
        {!conditions.isLoading && conditions.states.map(item =>(
          <StateCard
            key={item.name}
            name={item.name}
            id = {(id++)}
            capital={item.capital}
          />
        ))}
      </div>
    </div>
  )
}

export default Home