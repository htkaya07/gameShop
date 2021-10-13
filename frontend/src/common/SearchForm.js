import React, { useState } from "react";
import "./SearchForm.css";

const SearchForm= () => {

    const [searchTerm, setSearchTerm] =useState('');


    const handleSubmit= (evt) =>{
   evt.preventDefault();
   setSearchTerm('')

    }

    const handleChange=(evt) => {
        setSearchTerm(evt.target.value)
    }
    
    




    return(
        <div className="SearchForm">
            <form className="d-flex" onSubmit={handleSubmit}>
                <input
                 className="form-control"
                 name="searchTerm"
                 placeholder="Search"
                 value={searchTerm}
                 onChange={handleChange}
                 />
                 <button type="submit" className="btn">
                     Submit
                 </button>
                 </form>
        </div>

    )
}

export default SearchForm;