import React from 'react'
import logo from '../assets/images/logo.png'
import CardWithTitle from './CardWithTitle'

function Testimonials() {
    return (
        <div>
            <h1 className="text-center mt-3">Testimonials</h1>
            <div className="row row-cols-1 row-cols-md-5 g-4">

                <div className="col"><CardWithTitle cardImage={logo} /></div>
                <div className="col"><CardWithTitle cardImage={logo} /></div>
                <div className="col"><CardWithTitle cardImage={logo} /></div>
                <div className="col"><CardWithTitle cardImage={logo} /></div>
                <div className="col"><CardWithTitle cardImage={logo} /></div>
            </div>
        </div>
    )
}

export default Testimonials
