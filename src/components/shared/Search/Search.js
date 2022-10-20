import React from "react"
import "./Search.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faBars} from "@fortawesome/free-solid-svg-icons";
const Search = () => {
    return (
        <>
        <header className="header">
          <div>

    <FontAwesomeIcon
            icon={faBars}
            size="2x"
            width={17}
            className="mobile-menu-icon"
          />
        <img src="images/logo.png" alt="logo" />
          </div>
         

        <div className="searchinput-div">
          <FontAwesomeIcon
            icon={faSearch}
            size="1x"
            width={11}
            className="search-icon"
          />

          <input
            type="text"
            className={"search-box"}
            placeholder="Search artists"
            //   onChange={handleSearchCountry}
            //   value={searchValue}
          />
          </div>


      </header>        
        </>

    )
}
export default Search