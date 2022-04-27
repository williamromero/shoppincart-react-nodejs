import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const Main = ({ children }) => {
  return (
    <>
      <Header />
      { children }
      <Footer />
    </>
  )
}

export default Main
