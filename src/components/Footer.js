import React from 'react'
import Logo from './Logo'



function Footer() {
    return (


        <div className='bg-dark text-white'>
            <div className="container-fluid">
                <footer className="py-5">

                    <div className="row">
                        <div className="col-6">
                            <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto a-dark text-decoration-none">
                                <Logo />
                            </a> <br />
                            <h5 className="text-primary" style={{ width: "100%", height: "auto" }}>CONTACT DETAILS</h5>
                            <ul className="nav flex-column">

                                <li className="nav-item mb-2" style={{ width: "100%", height: "auto" }}><span className="material-icons me-1">
                                    place
                                </span>JAGADAMBA CEMENT <br />
                                    Neupane Tower, 6th Floor,
                                    Subidhanagar, Tinkune <br />
                                    Kathmandu, Nepal</li>
                                <li className="nav-item mb-2" style={{ width: "100%", height: "auto" }}><span className="material-icons me-1">
                                    email
                                </span>info@jagdambacement.com</li>
                                <li className="nav-item mb-2" style={{ width: "100%", height: "auto" }}><span className="material-icons me-1">
                                    call
                                </span>+977.1.4111500, +977.1.4111550, +977.1.4111633</li>
                            </ul>

                        </div>
                        <div className="col-3" >
                            <h5 >Main Links</h5>
                            <ul className="nav flex-column" >
                                <li className="nav-item mb-2" ><a href="/" className="nav-a p-0 text-muted text-decoration-none">Home</a></li>
                                <li className="nav-item mb-2" ><a href="/about" className="nav-a p-0 text-muted text-decoration-none">About</a></li>
                                <li className="nav-item mb-2" ><a href="/contact" className="nav-a p-0 text-muted text-decoration-none">Contact</a></li>
                                <li className="nav-item mb-2" ><a href="/gallery" className="nav-a p-0 text-muted text-decoration-none">Gallery</a></li>
                                <li className="nav-item mb-2" ><a href="/contributions" className="nav-a p-0 text-muted text-decoration-none">Contributions</a></li>
                                <li className="nav-item mb-2" ><a href="/brands" className="nav-a p-0 text-muted text-decoration-none">Brands</a></li>
                            </ul>
                        </div>

                        <div className="col-3" >
                            <h5 >Other Links</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="/career" className="nav-a p-0 text-muted text-decoration-none">Career</a></li>
                                <li className="nav-item mb-2"><a href="/vaastu" className="nav-a p-0 text-muted text-decoration-none">Vaastu</a></li>
                                <li className="nav-item mb-2"><a href="/plants" className="nav-a p-0 text-muted text-decoration-none">Plants</a></li>

                            </ul>
                        </div>




                        <div className="d-flex justify-content-between py-4 my-4 border-top">
                            <p> Jagadamba &copy; 2021. All rights reserved. || &nbsp;</p>
                            {/* <!-- div trigger modal --> */}

                            <div className="col" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                                <div>
                                    <span className='text-decoration-underline' role="button"> Privacy Policy</span>
                                </div>


                                {/* <!-- Modal --> */}
                                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-scrollable">
                                        <div className="modal-content text-dark">
                                            <div className="modal-header ">
                                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                This is the privacy policy of Jagadamba Cement
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <ul className="list-unstyled d-flex">
                                <li className="ms-auto"><a target="_blank" rel="noreferrer" className="a-dark" href="https://www.fb.com"><img style={{ width: "100%", height: "auto" }} src="https://img.icons8.com/fluency/55/000000/facebook-new.png" alt="facebookLogo" /></a></li>
                                <li className="ms-auto"><a target="_blank" rel="noreferrer" className="a-dark" href="https://www.instagram.com"><img style={{ width: "100%", height: "auto" }} src="https://img.icons8.com/fluency/55/000000/instagram-new.png" alt="instagramLogo" /></a></li>
                                <li className="ms-auto"><a target="_blank" rel="noreferrer" className="a-dark" href="https://www.twitter.com"><img style={{ width: "100%", height: "auto" }} src="https://img.icons8.com/color/55/000000/twitter--v1.png" alt="twitterLogo" /></a></li>
                            </ul>

                        </div>
                    </div>

                </footer>
            </div>




        </div>

    )
}

export default Footer
