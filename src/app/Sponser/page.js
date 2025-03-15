import React from 'react'
import "./sponsor.css"

function page() {
    return (
        <section>
            <div className="mainbody">
                <div className='hackonitheader'>Sponsors</div>
                <div className="hackonitsubhead">Our Sponsors And Partners</div>
                <div className='border'></div>
                <div className="sponsorheader">TECHNICAL COLLABORATION</div>
                <div className="sponsorimage">
                    <span><img src="/TECH-IMG.png" alt="error" /></span>
                    <span><img src="/TECH-IMG2.png" alt="" /></span>
                </div>
                <div className="sponsorheader">IN ASSOCIATION WITH</div>
                <div className="sponsorimage">
                    <img src="/Asso-img.png" alt="error" />
                </div>
                <div className="sponsorheader">POWERED BY</div>
                <div className="sponsorimage">
                    <span><img src="/powered-img.jpg" alt="error" /></span>
                </div>
            </div>
        </section>
    )
}

export default page