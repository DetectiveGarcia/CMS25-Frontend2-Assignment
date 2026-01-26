import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { Get } from "./Admin/Get";
import { Post } from "./Admin/Post";
import { Put } from "./Admin/Put";
import { Delete } from "./Admin/Delete";

const AdminPanel = () => {
  const [currentOption, setCurrentOption] = useState("");
  const [movies, setMovies] = useState([]);
  const [automaticSelectedMovie, setAutomaticSelectedMovie] = useState(null);
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

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:3001/movies");

        if (!response.ok) {
          throw new Error("Something wrong with movies");
        }
        const data = await response.json();
        setMovies(data);
        setAutomaticSelectedMovie(data[0])
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

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
            crudOptions.map((option) => {
              return (
                <li
                  key={option.name}
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
        {currentOption === "GET" && <Get {...{ movies }} />}
        {currentOption === "POST" && <Post {...{ movies }} />}
        {currentOption === "PUT" && <Put {...{ movies, automaticSelectedMovie }} />}
        {currentOption === "DELETE" && <Delete {...{ movies, automaticSelectedMovie }} />}
      </main>
    </>
  );
};

export default AdminPanel;
