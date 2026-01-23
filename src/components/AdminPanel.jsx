import React, { useState } from 'react'
import { NavLink } from 'react-router';

const AdminPanel = () => {

  const [crudOptions, setCrudOptions] = useState([
    {
      name: "GET",
      selected: false
    },
    {
      name: "POST",
      selected: false
    },
    {
      name: "PUT",
      selected: false
    },
    {
      name: "DELETE",
      selected: false
    },
  ])



  return (
    <main>

      <h1>AdminPanel</h1>
      <NavLink to="/" end>
        Home
      </NavLink>

      <ul className='crud-options' >
        {crudOptions && crudOptions.map((option, index) => {
          return(
            <li className={`crud-option ${option.selected && "option-selected" }`} onClick={() => {

              setCrudOptions(crudOptions.map(crudOption => crudOption.name === option.name ? {...crudOption, selected: true} : {...crudOption, selected: false}))
              
            }}>{option.name}</li>
          )
        })}
      </ul>
    </main>
  )
}

export default AdminPanel;