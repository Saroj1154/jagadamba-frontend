import React from 'react'
import Card from '../components/Card'
import companyProfile from '../assets/images/companyProfile.jpg'
import visionMission from '../assets/images/visionMission.jpg'
import QA from '../assets/images/QA.jpg'
import packaging from '../assets/images/packaging.jpg'


function About() {
    return (
        <div className='container-fluid p-4'>
            <div className="row row-cols-1 row-cols-md-2 g-4">

                {/* <!-- div trigger modal --> */}
                <div className="col" data-bs-toggle="modal" data-bs-target="#companyProfileModal"><h2 className='text-center'>Company Profile</h2>
                    <div style={{ cursor: 'pointer' }}>

                        <Card cardImage={companyProfile} />
                    </div>

                </div>


                {/* <!-- Modal --> */}
                <div className="modal fade" id="companyProfileModal" tabindex="-1" aria-labelledby="companyProfileModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="companyProfileModalLabel">COMPANY PROFILE</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Established in the year 2001, Jagdamba Cement is a distinct brand name in the Nepalese market. This company since then has been the market leader in cement manufacturing in Nepal. This company also holds the largest market share in the Nepalese market. As the top cement producer in Nepal, it is the only manufacturer of OPC, PPC and PSC cements. According to the market’s requirement, Jagdamba Cement Industries Pvt. Ltd has committed to consistency in quality, regularity in supply and quantity in production. <br />

                                Jagdamba Cement Industries Pvt. Ltd. has been producing and distributing three types of cement in Nepal so far, Ordinary Portland Cement (OPC), Pozzolana Portland Cement (PPC) and Pozzolana Slag Cement (PSC) at competitive prices to fulfill the needs and satisfaction of its valued customers in Nepal. The price of cement in Nepal that is distributed by JCI is comparatively reasonable. The rate of cement in Nepal can be found in many rates as the price/rate of cement in Nepal varies from brand to brand yet JCI has considered the affordability of the customers of Nepal. JCI has set a new benchmark achieved by meeting the statutory and regulatory requirements of the country using high grade raw material with continuous improvement in quality of services rendered by the company, enhancing the involvement of all levels of employees, using best available resources and by reviewing quality objectives time and again.

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- div trigger modal --> */}

                <div className="col" data-bs-toggle="modal" data-bs-target="#visionMissionModal" ><h2 className='text-center'>Vision & Mission</h2>
                    <div style={{ cursor: 'pointer' }}>
                        <Card cardImage={visionMission} /></div>

                </div>


                {/* <!-- Modal --> */}
                <div className="modal fade" id="visionMissionModal" tabindex="-1" aria-labelledby="visionMissionModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="visionMissionModalLabel">VISION & MISSION</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Vision <br />

                                To fulfil the demand of high quality cement with the application of new technologies and aid in the overall infrastructural development of the country.
                                <br />
                                <br />

                                Mission <br />


                                To provide our valued customers with guaranteed best quality cement in Nepal maintaining excellent services, easy availability, and regularity in supply and quality consistency.
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- div trigger modal --> */}

                <div className="col" data-bs-toggle="modal" data-bs-target="#QAModal" >
                    <h2 className='text-center'>Quality Assurance</h2><div style={{ cursor: 'pointer' }}>

                        <Card cardImage={QA} /></div></div>


                {/* <!-- Modal --> */}
                <div className="modal fade" id="QAModal" tabindex="-1" aria-labelledby="QAModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="QAModalLabel">QUALITY ASSURANCE</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Our fully equipped Quality Monitoring Units located in the factory, in Kathmandu and in India controls the quality of our cement. Our huge production capacity of 40,000 bags of cement per day insures steady and regular supply of freshly grinded cement to builders, contractors and engineers at any time of the year. The quality of cement in Nepal is a standard met by JCI. Our production units located at two strategic locations gives us the advantage of being the largest and fastest cement supplier with top quality cement in the country. Jagdamba Cement Industries Pvt Ltd. is a Nepal Standard (NS) certified cement company and conducts regular Lab tests in reputed laboratories in Nepal and India. "National Test House, Ministry of Consumer Affairs, Food & Public Distribution, Department of Consumer Affairs" as well as National Council for Cement and Building Materials, Independent Testing Laboratories, Ballabgarh" are the main Laboratories in India where we conduct our tests, whereas in Nepal almost every Government and Non-Government Laboratories conduct frequent tests of our cement. The physical and chemical reports are readily available upon request for any projects.

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>



                {/* <!-- div trigger modal --> */}

                <div className="col" data-bs-toggle="modal" data-bs-target="#packagingModal" >
                    <h2 className='text-center'>Packaging</h2>
                    <div style={{ cursor: 'pointer' }}>

                        <Card cardImage={packaging} /></div>
                </div>


                {/* <!-- Modal --> */}
                <div className="modal fade" id="packagingModal" tabindex="-1" aria-labelledby="packagingModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="packagingModalLabel">PACKAGING</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Jagdamba Cement Industries Pvt. Ltd. is the first and the only single cement industry in Nepal to use laminated cement bags. These bags, which are most ideal for packaging of cement and substituting traditional sacks, are manufactured under the innovative and patented technology from AD Star of Starlinger, Austria.
                                <br />
                                <h2>

                                    Benefits of Laminated bags:
                                </h2>

                                <ul>
                                    <li>

                                        Almost zero bursting: laminated bags can withstand drop test from up to 5 Feet.
                                    </li>
                                    <li>
                                        It is stronger than traditional sack which is more tear resistant and hence can withstand rough handling.

                                    </li>
                                    <li>
                                        Better resistant to humid conditions resulting in prolonged shelf life of product.

                                    </li>
                                    <li>

                                        Improved non-fading water and moisture resistant printing enhances the package look: added benefit to give product a facelift without extra cost.
                                    </li>
                                    <li>
                                        Identical style of traditional filling with no need for extra equipment.

                                    </li>
                                    <li>

                                        Identical micro perforation.
                                    </li>
                                    <li>
                                        Attractive looks - ease of handling - Efficient logistic movements.

                                    </li>
                                    <li>
                                        Reduce health hazards significantly.

                                    </li>
                                </ul>




                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default About
