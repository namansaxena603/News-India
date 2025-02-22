import React from 'react'
function Navbar() {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg" style={{ borderBottomLeftRadius: "25px", display: "flex", height: "7vh", backgroundColor: "black" }}>
                <a className="navbar-brand mx-4" style={{ display: "flex", fontWeight: "bold", color: "white" }} href="/">News- <h4 className='orange' style={{ color: "orange", fontWeight: "bold" }}>In</h4><h4 className='white' style={{ color: "white", fontWeight: "bold" }}>d</h4><h4 className='green' style={{ color: "green", fontWeight: "bold" }}>ia</h4></a>
            </nav>
        </div>
    )
}
export default Navbar