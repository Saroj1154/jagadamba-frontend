import React from 'react'


function Card(props) {
    return (
        <div>
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.cardImage} className="img-fluid rounded-start" alt="card" />
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Card
