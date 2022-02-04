import React from 'react'
import Card from '../components/Card'
import plant1 from '../assets/images/plant1.JPG'
import plant2 from '../assets/images/plant2.jpg'

function Plants() {
    return (
        <div className='container-fluid p-4'>
            <h2 className='text-center'>Plants</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4 m-1">

                {/* <!-- div trigger modal --> */}
                <div className="col" data-bs-toggle="modal" data-bs-target="#plant1Modal">
                    <div style={{ cursor: 'pointer' }}>

                        <Card cardImage={plant1} />
                    </div>

                </div>


                {/* <!-- Modal --> */}
                <div className="modal fade" id="plant1Modal" tabindex="-1" aria-labelledby="plant1ModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="plant1ModalLabel">Shubha Shree Jagdamba Cement Mills (P) Ltd.</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                In short span of time, Shubha Shree Jagdamba Cement Mills Pvt Ltd is very successful to maintain its quality in products, price and availability for this reason it has become one of the most trust able cement in the heart of Nepalese. <br />
                                The contact details of the plant located at Birgunj is as follows: <br />

                                Shubha Shree Jagdamba Cement Mills Pvt. Ltd. <br />
                                Chhata Pipra Chorni-4 <br />
                                Parsa, Nepal <br />
                                <span className="material-icons">
                                    phone
                                </span>
                                +977.1.411 1500, 411 1550 <br />
                                <span className="material-icons">
                                    print
                                </span>
                                +977.1.411 1634 <br />
                                <span className="material-icons">
                                    email
                                </span>
                                info@jagdambacement.com <br />

                                Producing 15000 tons (30,000 bags) of cement Jagdamba has become one of the prime producers of cement industry of Nepal. Jagdamba cement and Shubha Shree Jagdamba Cement's products are available in its prime distributors from east Nepal Mechi to west Nepal Mahakali.
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- div trigger modal --> */}

                <div className="col" data-bs-toggle="modal" data-bs-target="#plant2Modal" >
                    <div style={{ cursor: 'pointer' }}>
                        <Card cardImage={plant2} /></div>

                </div>


                {/* <!-- Modal --> */}
                <div className="modal fade" id="plant2Modal" tabindex="-1" aria-labelledby="plant2ModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="plant2ModalLabel">JAGDAMBA CEMENT INDUSTRIES (P) LTD.</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Jagdamba Cement is a distinct brand name in the Nepalese market. This company was established in the year ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Plants
