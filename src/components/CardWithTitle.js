import React from 'react';

function CardWithTitle(props) {
    return (

        <div>
            <div className="card mb-3" >
                <div className="row">
                    <div className="col">
                        <div className="container">
                            <img src={props.cardImage} className="img-fluid rounded-start mx-3" alt="card" />

                            <a target="_blank" rel="noreferrer" href={props.loa} className="text-decoration-none">Letter of Appreciation</a>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.text}</p>

                    </div>
                </div>
            </div>
        </div >

    );
}

export default CardWithTitle