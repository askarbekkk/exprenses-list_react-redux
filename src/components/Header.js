import React from 'react';
import {useSelector} from "react-redux";
import {resetAll} from "../redux/actions/tasksActions";

const Header = () => {
    const name = useSelector(store => store.user.name)

    return (

      <>
          <nav className="navbar navbar-light bg-light">
              <div className="container-fluid">
                  <h1 className="navbar-brand" >{name}</h1>
                  <button
                      onClick={() => resetAll()}
                      className="btn btn-danger">Сбросить Все</button>

              </div>

          </nav>



      </>
    );
};

export default Header;