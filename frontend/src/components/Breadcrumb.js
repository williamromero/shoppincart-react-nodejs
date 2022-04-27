import React from 'react'

export const Breadcrumb = ({ name }) => {

  const capitalize = (text) => {
    return text === undefined ? "" : text.substr(0,1).toUpperCase() + text.substr( 1 )
  }

  return (
    <div className="breadcrumb">
      { capitalize(name) }
    </div>
  )
}
