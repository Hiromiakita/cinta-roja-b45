import React from 'react'

const Search = () => {
    return (
        <div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Buscador de GIFs" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">Buscar GIF</span>
                </div>
            </div>
        </div>
    )
}

export default Search
