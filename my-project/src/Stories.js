import React, { useContext } from 'react'
import { AppContext } from './context'

function Stories() {
  const {hits} = useContext(AppContext);
  return (
    <div>
      {hits.map((curPost)=>{
        <h2>{curPost.title}</h2>
      })}

    </div>
  )
}

export default Stories
