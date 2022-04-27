import React from 'react'
import Sidebar from '../components/admin/Sidebar'

const ClientAdmin = ({ children }) => {
  return (
    <div className="main-cladmin">
      <Sidebar />
      <div className="main-cladmin__container">
        <div className="main-cladmin__topmenu"></div>
        { children }
      </div>
    </div>
  )
}

export default ClientAdmin
