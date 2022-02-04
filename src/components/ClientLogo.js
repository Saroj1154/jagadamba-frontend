import React from 'react'

function ClientLogo(props) {
    return (
        <div>
            <img src={props.image} alt="clientLogo" className=" border border-dark border-1 rounded-circle " />
        </div>
    )
}

export default ClientLogo
