import React from 'react'
import { NavLink } from 'react-router-dom'
import IconElement from '../common/IconElement'

const Sidebar = () => {
  return (
    <div className="main-admin__sidebar">
      <IconElement />
      <div className="main-admin__sidebar-list">
        <NavLink exact activeClassName="active" className="nav-item nav-link" aria-current="page" to="../admin" >
          <i className="fas fa-dice-d6"></i>
          Main
        </NavLink>        
        <NavLink exact activeClassName="active" className="nav-item nav-link" aria-current="page" to="../admin/settings" >
          <i className="fas fa-cogs"></i>
          Settings
        </NavLink>
        <NavLink exact activeClassName="active" className="nav-item nav-link" aria-current="page" to="../admin/profiles" >
          <i className="fas fa-id-card-alt"></i>
          Profiles
        </NavLink>
        <NavLink exact activeClassName="active" className="nav-item nav-link" aria-current="page" to="../admin/profiles" >
          <i className="fas fa-window-close"></i>
          Salir
        </NavLink>        
      </div>
    </div>
  )
}

export default Sidebar
