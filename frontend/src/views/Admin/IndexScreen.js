import React from 'react'
import { Breadcrumb } from '../../components/Breadcrumb'

const IndexScreen = (props) => {
  const pathname = props.location.pathname.split("/")[2]
  console.log(pathname)
  return (
    <>
      <Breadcrumb name={ pathname } />
    </>
  )
}

export default IndexScreen
