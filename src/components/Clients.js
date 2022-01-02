import React from 'react'
import logo from '../assets/images/logo.png'
import ClientLogo from './ClientLogo';

function Clients() {
    return (
        <div>
            <h1 className="text-center">Clients</h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ClientLogo image={logo} />
                    </div>
                    <div className="col">
                        <ClientLogo image={logo} />

                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ClientLogo image={logo} />

                    </div>
                    <div className="col">
                        <ClientLogo image={logo} />

                    </div>
                    <div className="col">
                        <ClientLogo image={logo} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients
