import React from 'react';

function BrandLogo(props) {
    return (
        <div>
            <img src={props.image} alt="brandLogo" className="bg-warning" />
        </div>
    )
}

export default BrandLogo
