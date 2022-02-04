import React from 'react'
import Logo from './Logo'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from '../pages/About';
import Brands from '../pages/Brands'
import Career from '../pages/Career'
import Contact from '../pages/Contact'
import Contributions from '../pages/Contributions'
import Gallery from '../pages/Gallery'
import Homepage from '../pages/Homepage';
import Plants from '../pages/Plants'
import Vaastu from '../pages/Vaastu'

function Navbar() {
    return (
        <Router>

            <div>



                <nav className="navbar navbar-expand-lg navbar-light" style={{ background: "rgb(43, 44, 107)" }}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/"><Logo /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/gallery">Gallery</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/plants">Plants</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/brands">Brands</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/contributions">Contributions</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/contact">Contact</Link>
                                </li>


                            </ul>

                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Homepage />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/brands" element={<Brands />}></Route>
                    <Route path="/contributions" element={<Contributions />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/career" element={<Career />}></Route>
                    <Route path="/gallery" element={<Gallery />}></Route>
                    <Route path="/plants" element={<Plants />}></Route>
                    <Route path="/vaastu" element={<Vaastu />}></Route>
                </Routes>
            </div>
        </Router>
    )
}

export default Navbar
