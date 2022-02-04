import React from 'react'


function Card(props) {
    return (
        <div>
            <div className="container" >
                <div className="row">
                    <div className="col">
                        <img src={props.cardImage} className="img-fluid rounded-start" role="button" alt="card" />
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Card
