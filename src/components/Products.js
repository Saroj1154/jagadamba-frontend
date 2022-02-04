import React from 'react'
import Card from './Card'
import ppc from '../assets/images/PPC.png'
import opc from '../assets/images/OPC.png'
import psc from '../assets/images/PSC.png'

function Products() {
    return (
        <div className='mt-4'>
            <h1 className="text-center">Our Products</h1>
            <h3 className="text-center">

                <span>*</span><span>Many Start Fast, Few Finish Strong</span><span>*</span>
            </h3>
            <div className="container-fluid">

                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {/* <!-- div trigger modal --> */}

                    <div className="col" data-bs-toggle="modal" data-bs-target="#ppcModal"><Card cardImage={ppc} /></div>


                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="ppcModal" tabindex="-1" aria-labelledby="ppcModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="ppcModalLabel">Portland Pozzolana Cement (PPC)</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    Portland-pozzolana cement is produced by grinding together Portland cement clinker and artificial pozzolana (Fly ash) with addition of gypsum or calcium sulphate.
                                    <br />
                                    Fly ash is a very fine material produced as a residue precipitated electro-statically or mechanically from the exhaust gases of coal-fired thermal power station.
                                    <br />
                                    Generally 15-25% fly ash is mixed and ground together with 65-75% Portland clinker and 3-6% gypsum to make the best PPC cement in Nepal.
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- div trigger modal --> */}

                    <div className="col" data-bs-toggle="modal" data-bs-target="#opcModal"><Card cardImage={opc} /></div>


                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="opcModal" tabindex="-1" aria-labelledby="opcModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="opcModalLabel">Ordinary Portland Cement (OPC)</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    Ordinary Portland Cement is made primarily from calcareous and argillaceous materials, such as limestone or chalk, and from aluminum oxide, silica oxide, ferric oxide and magnesium oxide found as clay or shale. Raw materials for the manufacture of Portland cement are found in nearly all countries. <br />

                                    The raw materials are quarried from the rocks and first crushed to size less than 50 mm. The raw materials are ground together in a raw mill. Accurately controlled proportions of each material are delivered onto the belt by weigh feeders. The raw mix is formulated to correct chemical composition to produce Ordinary Portland Cement. JCI makes the best PPC cement in Nepal.
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* <!-- div trigger modal --> */}

                    <div className="col" data-bs-toggle="modal" data-bs-target="#pscModal"><Card cardImage={psc} /></div>


                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="pscModal" tabindex="-1" aria-labelledby="pscModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="pscModalLabel">Portland Slag Cement(PSC)</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    As per the great success achieved by Jagdamba Cement Industries Pvt. Ltd. in Bhairahawa (established in B.S. 2057) by producing PPC and OPC cement, soon we brought Shuba Shree Jagdamba Cement  Mills Pvt. Ltd., Birgunj in B.S. 2061 for the production of High quality OPC and PSC cement.
                                    Under this Industry, we are producing <br />
                                    <ul>
                                        <li>

                                            Jagdamba Ultra Premium OPC Cement (OPC)<br />
                                        </li>
                                        <li>
                                            Shubha Shree Jagdamba Cement (PSC)<br />

                                        </li>
                                        <li>
                                            Mount cement (PSC)<br />

                                        </li>
                                        <li>
                                            Force Cement (PSC)<br />

                                        </li>
                                    </ul>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Products


