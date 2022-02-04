import React from 'react'
import loa1 from '../assets/images/loa1.jpg'
import loa2 from '../assets/images/loa2.jpg'
import loa3 from '../assets/images/loa3.jpg'
import review1 from '../assets/images/review1.jpg'

import review2 from '../assets/images/review2.jpg'
import review3 from '../assets/images/review3.jpg'
import review4 from '../assets/images/review4.jpg'
import review5 from '../assets/images/review5.jpg'
import review6 from '../assets/images/review6.jpg'
import CardWithTitle from './CardWithTitle'

function Testimonials() {
    return (
        <div>
            <h1 className="text-center mt-3">Testimonials</h1>
            <div className="container">

                <div className="row row-cols-1 row-cols-md-3 g-4">

                    <div className="col"><CardWithTitle cardImage={review1} loa={loa1} title="Aankhu Khola Jalbidhyut Company Ltd., Dhading, Nepal" text="We would like to extend our warmest appreciation to your company for regular and timely supply of required Ultra Premium OPC Cement for the construction of Aankhukhola-1 Hydropower project (8.4 MW) in Dhading district promoted by this Company." /></div>
                    <div className="col"><CardWithTitle cardImage={review2} loa={loa2} title="Om Prakash Subedi, General Manager, Panchakanya Group, Krishna Galli, Lalitpur" text="We are happy to announce that in due course of our business we found the quality as well as the delivery of the product highly satisfactory to our need. 

We majorly appreciate M/S Jagdamba Cement Industries Pvt. Ltd., Tinkune, for providing consistent quality product and efficient service to us and wish its further progress in the years to come." /></div>
                    <div className="col"><CardWithTitle cardImage={review3} loa={loa3} title="Min Bahadur Gurung, Managing Director, Bhatbhateni Super Store, Kathmandu" text="We are glad to extend our appreciation on the quality supply of Ultra Premium OPC Cement in a significant quantity in our Bhatbhateni Supermarket and Departmental Store Projects at Koteshor, Krishnagalli, Chuchepati and Newroad, Pokhara for the heavy Structural Concreting works." /></div>
                    <div className="col"><CardWithTitle cardImage={review4} title="Er. Bijay Rajbhandary, Chairman/ MD, CE Construction, Tripureshwor, Kathmandu" text="It is our great pleasure to state that CE Construction Pvt. Ltd has been using Jagadamba Ultra brand Premium OPC Cement in a significant quantity since June 2008 for structural RCC works. CE Construction Pvt. Ltd founded in 1992 is a corporate holding company operational in areas of Constnrction, Consultancy, Construction Management, Property Development, Manufacturing, Education, Finance and Health." /></div>
                    <div className="col"><CardWithTitle cardImage={review5} title="Norvic International Hospital Medical College Pvt. Ltd., Thapathali, Kathmandu" text="This is our pleasure to say that we are using your cement under brand 'Ultra Premium OPC Cement' since one year and as per our technical team the quality of cement is really appreciable. We are fully satisfied with the qualities of material." /></div>
                    <div className="col"><CardWithTitle cardImage={review6} title="Sharma & Company Pvt. Ltd., RK Complex, Sitapaila, Kathmandu" text="This is to certify that our company has been using Ultra Premium OPC cement of M/S Jagadamba  Cement Industries Pvt. Ltd. and Shubha Shree
Jagadamba Cement Mills Pvt. Ltd. in a significant quantity for the heavy structural work in our Project.


We are happy to certify that we are convinced by their consistent high quality and satisfactory customer service which has impressed us to use the brand in our future projects as well. We congratulate them for producing quality cement and wish all success in their endeavors." /></div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
