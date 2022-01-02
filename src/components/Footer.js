import React from 'react'
import Logo from './Logo'

function Footer() {
    return (
        <div>


            <div className="container">
                <footer className="row row-cols-5 py-5 my-5 border-top">
                    <div className="col">
                        <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                            <Logo style={{ height: '40px', width: '60px' }} />
                        </a>
                        <p className="text-muted">JagadambaCement&copy; 2021||
                            <span><a href="#"> Policy </a></span></p>
                    </div>

                    <div className="col">

                    </div>

                    <div className="col">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                        </ul>
                    </div>


                    <div className="col">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                        </ul>
                    </div>
                </footer>
            </div>

        </div>
    )
}

export default Footer
