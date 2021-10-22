import React, { useState } from "react";
import "./SearchForm.css";
import { Button, CloseButton } from "react-bootstrap";


const SearchForm= ({searchFor}) => {

    const [searchTerm, setSearchTerm] =useState('');


    const handleSubmit= (evt) =>{
   evt.preventDefault();
   searchFor(searchTerm.trim() || undefined);
   setSearchTerm(searchTerm.trim())

    }
    const cancelSearch = (evt) => {
        evt.preventDefault();
        setSearchTerm('')
    }

    const handleChange=(evt) => {
        setSearchTerm(evt.target.value)
    }
    
    




    return(
        <div className=" col-md-8 offset-md-2" size="lg">
            <form className="d-flex" onSubmit={handleSubmit}>
                <input
                 className="form-control"
                 name="searchTerm"
                 placeholder="Search"
                 value={searchTerm}
                 onChange={handleChange}
                 onCancelSearch={cancelSearch}
                 
                 
                /> 
                 
                 
                 
                 
                
                   <Button  variant="danger" type="reset" defaultValue="Reset"  href='/'    >X</Button>
                 <button type="submit" className="btn">
                     Submit
                 </button>
                 </form>
        </div>

    )
}

export default SearchForm;