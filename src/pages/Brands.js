import React from 'react'
import brand1 from '../assets/images/brand1.png'
import brand2 from '../assets/images/brand2.png'
import brand3 from '../assets/images/brand3.png'
import brand4 from '../assets/images/brand4.png'
import brand5 from '../assets/images/brand5.png'
import brand6 from '../assets/images/brand6.png'
import brand7 from '../assets/images/brand7.png'
import brand8 from '../assets/images/brand8.png'
import brand9 from '../assets/images/brand9.png'
import brand10 from '../assets/images/brand10.png'
import brand11 from '../assets/images/brand11.png'
import BrandLogo from '../components/BrandLogo'

function Brands() {
    return (
        <div className="bg-warning">
            <h1 className="text-center pt-2 pb-4 text-primary text-bold">Brands</h1>
            <div className="container-fluid pb-3">
                <div className="row">
                    <div className="col  my-1">
                        <h4 className="">
                            Jagadamba PPC Cement
                        </h4>
                        <BrandLogo image={brand1} />
                    </div>
                    <div className="col  my-1">
                        <h4 className="">
                            Subha Shree Jagadamba PSC Cement
                        </h4>
                        <BrandLogo image={brand2} />

                    </div>
                    <div className="col  my-1">
                        <h4 className="">
                            Jagadamba Cement NS 385
                        </h4>
                        <BrandLogo image={brand3} />

                    </div>

                    <div className="col  my-1">
                        <h4 className="">
                            Jagadamba Ultra Active PPC Cement
                        </h4>
                        <BrandLogo image={brand4} />

                    </div>
                    <div className="col  my-1">
                        <h4 className="">
                            Mount PSC Cement
                        </h4>
                        <BrandLogo image={brand5} />

                    </div>
                    <div className="col  my-1">
                        <h4 className="">
                            Force PSC Cement
                        </h4>
                        <BrandLogo image={brand6} />

                    </div>
                    <div className="col  my-1">
                        <h4 className="">
                            Jagadamba Ultra Ultimo PSC Cement
                        </h4>
                        <BrandLogo image={brand7} />

                    </div>
                    <div className="col  my-1">
                        <h4 className="">
                            Jagadamba Ultra Premium OPC Cement
                        </h4>
                        <BrandLogo image={brand8} />

                    </div>
                    <div className="col  my-1">
                        <h4 className="">
                            Force F2R OPC Cement
                        </h4>
                        <BrandLogo image={brand9} />

                    </div>
                    <div className="col  my-1">
                        <h4 className="">
                            Subha Shree Everlast PSC Cement
                        </h4>
                        <BrandLogo image={brand10} />

                    </div>
                    <div className="col  my-1">
                        <h4 className="">
                            Jagadamba Gold OPC Cement
                        </h4>
                        <BrandLogo image={brand11} />

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Brands
