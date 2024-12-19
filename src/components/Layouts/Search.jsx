import React from 'react'

const Search = ({className, placeholder}) => {
  return (
    <input type="text" className={`outline-none ${className}`} placeholder={placeholder}/>
  )
}

export default Search