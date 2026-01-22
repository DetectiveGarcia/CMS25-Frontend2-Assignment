import React from 'react'
import { NavLink } from 'react-router';

const AdminPanel = () => {
  return (
    <main>

      <h1>AdminPanel</h1>
      <NavLink to="/" end>
        Home
      </NavLink>
    </main>
  )
}

export default AdminPanel;