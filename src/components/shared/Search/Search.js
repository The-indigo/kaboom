import React from "react"
import "./Search.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from "@fortawesome/free-solid-svg-icons";
const Search = () => {
    return (
        <>
    <header className="header">
        <img src="images/logo.png" alt="logo" />

        <div className={"searchinput-div"}>
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