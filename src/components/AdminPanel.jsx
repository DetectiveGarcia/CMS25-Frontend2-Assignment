import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { Get } from "./Admin/GET";
import { Post } from "./Admin/Post";
import { Put } from "./Admin/Put";
import { Delete } from "./Admin/Delete";

const AdminPanel = () => {
  const [currentOption, setCurrentOption] = useState("");
  const [crudOptions, setCrudOptions] = useState([
    {
      name: "GET",
      selected: false,
    },
    {
      name: "POST",
      selected: false,
    },
    {
      name: "PUT",
      selected: false,
    },
    {
      name: "DELETE",
      selected: false,
    },
  ]);

  return (
    <>
      <header>
        <h1>AdminPanel</h1>
        <NavLink to="/" end>
          Home
        </NavLink>
      </header>

      <main>
        <ul className="crud-options">
          {crudOptions &&
            crudOptions.map((option, index) => {
              return (
                <li
                  className={`crud-option ${option.selected && "option-selected"}`}
                  onClick={() => {
                    setCrudOptions(
                      crudOptions.map((crudOption) =>
                        crudOption.name === option.name
                          ? { ...crudOption, selected: true }
                          : { ...crudOption, selected: false },
                      ),
                    );
                    setCurrentOption(
                      crudOptions.find(
                        (crudOption) => crudOption.name === option.name,
                      ).name,
                    );
                  }}
                >
                  {option.name}
                </li>
              );
            })}
        </ul>
        {currentOption === "GET" && <Get />}
        {currentOption === "POST" && <Post />}
        {currentOption === "PUT" && <Put />}
        {currentOption === "DELETE" && <Delete />}
      </main>
    </>
  );
};

export default AdminPanel;
