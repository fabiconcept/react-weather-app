import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const NavBar = () => {
    const [query, setQuery]= useState("")
    const history = useLocation()
    const navigate = useNavigate()

    const searchHandler = e =>{
        e.preventDefault()
        navigate(`/find/${query}`)
    }
    return (
        <div className="nav-bar">
            {history.pathname === "/"  ?  <Link to="/"><div className="logo text-light h5 mx-2">24/7</div></Link> : <div className="logo text-light mx-2" onClick={()=>navigate(-1)}><span>&lt;</span> Home</div>}
            <div className="list">
                <form onSubmit= {searchHandler}>
                    <input type="text" className="search-box mx-2" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder='Search the globe...' />
                </form>
            </div>
        </div>
    )
}

export default NavBar;