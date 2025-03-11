import React from 'react'
import { FaCalendar } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa";
import "./hack.css"

function hackathon() {
    return (
        <>
            <section>
                <div className="mainbody">
                    <div className="hackbg1" >
                        <img src="/1bg.png" alt="" />
                    </div>
                    <div className="hackbg2"><img src="/2bg.png" alt="" /></div>
                    <div className="hackbg3"><img src="/3bg.png" alt="" /></div>

                    {/* <div className='hackonitheader'>Hack-O-Nit</div>
                <div className="hackonitsubhead">Hackathon</div> */}
                    <div className='border'></div>
                    <div className="hackcontainer">
                        <div className="hackimage">
                            <img className='img1' src="/hackonit.jpg" alt="image" />
                            <div className='hacklogo'>
                                <div><FaCalendar />   20th-21st March, 2025</div>
                                <div><FaClock />  10:30 am</div>
                            </div>
                            <div className="hackprize">
                                <div className='prize'>Prize Money</div>
                                <div><span className='gold'>Winner:</span>₹15k</div>
                                <div><span className='silver'>1st Runner Up:</span>₹10k</div>
                                <div><span className='bronz'>2nd Runner Up:</span>₹5k</div>
                            </div>
                            <div className="duplicate1">
                                <div>Scan For Viewing the rule Book</div>
                                <img src="/scan.png" alt="QR code" className="img2" />
                            </div>
                        </div>
                        <div className="hacktext">
                            <div><span>Team Size:</span>05</div>
                            <div><span>Room No:</span>503</div>
                            <div><span>Faculty Co-Coordinator: </span> Dr. Sandhya Pattanayak</div>
                            <div className='hackpara'>
                                Hack-O-NiT is an overnight hackathon where innovation meets endurance. Compete in a high-stakes coding marathon, building web apps, AI tools, or IoT systems. Test your problem-solving, teamwork, and technical skills under time constraints. Code through the night, refine ideas, and present to industry experts for exciting prizes.
                            </div>
                            <button className='hackbutton'>Register   <FaGreaterThan className='padd' /></button>
                            <div className='hackrules'>Rules & Guidelines</div>
                            <div>General Rules</div>
                            <li>Hack-O-NiT is a team-based event; each team must have 2 to 5 members.</li>
                            <li>Participants must be present at the venue throughout the event (No remote participation).</li>
                            <li>Teams must submit their final project before the deadline; late submissions will not be considered.</li>
                            <div>Facilities & Support</div>
                            <li>Wi-Fi, power outlets, and refreshments will be available.</li>
                            <li>Mentors will be present for guidance, not direct coding help.</li>
                            <li>Participants should bring their own laptops and required peripherals.</li>
                            <div className="duplicate">
                                <div>Scan For Viewing the rule Book</div>
                                <img src="/scan.png" alt="QR code" className="img2" />
                            </div>
                        </div>
                    </div>
                    {/* <div className='hackonitheader mtop'>Schedule</div>
                <div className="hackcontainer">
                    <div className="schedule">
                        <div className="day1">Day 1</div>
                        <div className="hackcard">
                            <div className="img">
                                <div className='time'>9:00<span>am</span></div>
                                <div>20th March,2025</div>
                            </div>
                            <div className='eventname'>Coding Event 1</div>
                        </div>
                        <div className="hackcard">
                            <div className="img">
                                <div className='time'>9:00<span>am</span></div>
                                <div>20th March,2025</div>
                            </div>
                            <div className='eventname'>Coding Event 1</div>
                        </div>
                    </div>
                    <div className="schedule">
                        <div className="day1">Day 2</div>
                        <div className="hackcard">
                            <div className="img">
                                <div className='time'>9:00<span>am</span></div>
                                <div>21th March,2025</div>
                            </div>
                            <div className='eventname'>Coding Event 1</div>
                        </div>
                        <div className="hackcard">
                            <div className="img">
                                <div className='time'>9:00<span>am</span></div>
                                <div>21th March,2025</div>
                            </div>
                            <div className='eventname'>Coding Event 1</div>
                        </div>
                    </div>
                </div> */}
                </div>
            </section>
        </>
    )
}

export default hackathon
