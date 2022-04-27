import React from 'react'

let yearDate = new Date(),
        year = yearDate.getFullYear()

const Footer = () => {

  return (
    <footer>
      Copyright &copy; {`${year}`}
    </footer>
  )
}

export default Footer
