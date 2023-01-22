import React, { useState } from 'react'
import './Pokemon.css'
import pokemon from './pokemon.json'
// import PropTypes from 'prop-types'


// const PokemonType = PropTypes.shape({
//   id: PropTypes.number.isRequired,
//   name: PropTypes.shape({
//     english: PropTypes.string.isRequired,
//     japanese: PropTypes.string.isRequired,
//     chinese: PropTypes.string.isRequired,
//     french: PropTypes.string.isRequired,
//   }),
//   type: PropTypes.arrayOf(PropTypes.string.isRequired),
//   base: PropTypes.shape({
//     hp: PropTypes.number.isRequired,
//     attack: PropTypes.number.isRequired,
//     defense: PropTypes.number.isRequired,
//     special_attack: PropTypes.number.isRequired,
//     special_defense: PropTypes.number.isRequired,
//     speed: PropTypes.number.isRequired,
//   })


// })

const PokemonRow = ({ pokemon, getSelectedPokemon }) => {
  return (
      <tr>
          <td>{pokemon.name.english}</td>
          <td>{pokemon.type.join(", ")}</td>
          <td><button onClick={() => getSelectedPokemon(pokemon)} >More Information</button></td>
      </tr>

  )
}

const PokemonInfo = ({ name: { english }, base }) => {
  return (
      <div>
          <h1>{english}</h1>
          <table>
              <tbody>
                  {Object.keys(base).map((key) => (
                      <tr key={key}>
                          <td>{key}</td>
                          <td>{base[key]}</td>

                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
  )
}


function Pokemon() {

  
  const [filter, setFilter] = useState('')
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  console.log('selectedPokemon', selectedPokemon)
  console.log(filter)

  const searchPokemon = (event) => {
    setFilter(event.target.value)
  }
  return (
    <div style={{
      margin: 'auto',
      width: 800,
      paddingTop: '1em'
    }} >
      <h1 className='title'>Pokemon Search</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: "80% 20%",
          gridColumnGap: '1rem'
        }}
      >
        <div>
          <input
            type='text'
            value={filter}
            onChange={searchPokemon}

          />
          <table width="100%">
            <thead>
              <tr>
                <th>Name of Pokemon</th>
                <th>Type of Pokemon</th>
              </tr>
            </thead>

            <tbody>

       {pokemon.filter((pokemon) => pokemon.name.english.toLowerCase().includes(filter.toLowerCase())).slice(0, 20).map((pokemon) => (
      <PokemonRow
       key={pokemon.id}
            pokemon={pokemon}
       getSelectedPokemon={(pokemon) => { setSelectedPokemon(pokemon) }}

  />
)
)}
              
            </tbody>
          </table>
        </div>

        <PokemonInfo {...selectedPokemon} />
      </div>

    </div>
  )
}

export default Pokemon;