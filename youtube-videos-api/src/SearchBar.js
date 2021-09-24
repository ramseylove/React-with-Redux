import React, { useState } from 'react'

function SearchBar(props) {
    
    const [term, setTerm] = useState('')

    const searchBarChangeHandler = (e) => {
        setTerm(e.target.value)
    }
    const searchFormSubmit = (e) => {
        e.preventDefault()
        props.onTermSubmit(term)

        //TODO: Make sure we callback from parent component
    }

    return (
        <div className="search-bar ui segment">
            <form onSubmit={searchFormSubmit} className="ui form" >
                <div className="field">
                    <label>Video Search</label>
                    <input 
                    type="text" 
                    value={term} 
                    onChange={searchBarChangeHandler}
                    />
                </div>
                </form>
        </div>
    )
}

export default SearchBar;
