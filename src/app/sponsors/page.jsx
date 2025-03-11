import React from 'react'
import"./sponser.css"
import Navbar from '../../../components/navbar'
import Footer from '../../../components/footer'

function page() {
    return (
        <section>
            <Navbar/>
            <div className="mainbody relative p-20">
                <div className='hackonitheader'>Sponsors</div>
                <div className="hackonitsubhead">Our Sponsors And Partners</div>
                <div className='border'></div>
            </div>
            <Footer/>
        </section>
    )
}

export default page
