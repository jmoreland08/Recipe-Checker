import React from 'react'
import {useParams} from "react-router-dom"

export default function Details({ingredientInfo}) {
  const params = useParams()
  const found = ingredientInfo.find(ingredient => ingredient.id === params.id)
  if (!found) {
    return<></>
  }
  return (
    <div className="main-container">
      <div className="ingredient-render">
      <h2 id="search-item">{found.fields.name}</h2>
      <p id="search-paragrph">{found.fields.ingredients}</p>
        </div>
    </div>
  )
}
