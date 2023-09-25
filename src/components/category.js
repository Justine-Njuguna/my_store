import React from 'react'

const category = props => {
  return (
    <div key={props.id}>{props.title}</div>
  )
}

export default category