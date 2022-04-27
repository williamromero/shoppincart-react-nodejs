import React from 'react'
import Sidebar from '../components/admin/Sidebar'

const Admin = ({ children }) => {
  return (
    <div className="main-admin">
      <Sidebar />
      <div className="main-admin__container">
        <div className="main-admin__topmenu"></div>
        { children }
      </div>
    </div>
  )
}

export default Admin
