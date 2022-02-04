import React from 'react'
import review1 from '../assets/images/review1.jpg'

import review2 from '../assets/images/review2.jpg'
import review3 from '../assets/images/review3.jpg'
import review4 from '../assets/images/review4.jpg'
import review5 from '../assets/images/review5.jpg'
import review6 from '../assets/images/review6.jpg'
import ClientLogo from './ClientLogo';

function Clients() {
    return (
        <div>
            <h1 className="text-center">Clients</h1>
            <div className="container pb-3">
                <div className="row">
                    <div className="col my-1">
                        <ClientLogo image={review1} />
                    </div>
                    <div className="col my-1">
                        <ClientLogo image={review2} />

                    </div>
                    <div className="col my-1">
                        <ClientLogo image={review3} />

                    </div>

                    <div className="col my-1">
                        <ClientLogo image={review4} />

                    </div>
                    <div className="col my-1">
                        <ClientLogo image={review5} />

                    </div>
                    <div className="col my-1">
                        <ClientLogo image={review6} />

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Clients
