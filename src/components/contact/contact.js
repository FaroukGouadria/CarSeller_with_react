import React from 'react'
import "./contact.css"
const contact = () => {
    return (
            
            <section className="contact" id="contact">
                <h1 className="heading"> <span>contact</span> us</h1>
                <div className="row">
                    <iframe class="map" title={"map"} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3234.274883405944!2d10.5807648!3d35.8422627!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x12fd8a57991180b7%3A0x75268e0b54377db8!2sSoci%C3%A9t%C3%A9%20Auto%20Multi%20services!5e0!3m2!1sfr!2stn!4v1632512733324!5m2!1sfr!2stn" allowfullscreen="" loading="lazy"></iframe>
            <form action="">
            <h3>get in touch</h3>
            <input type="text" placeholder="name" class="box"/>
            <input type="email"placeholder="email" class="box"/>
            <input type="number"placeholder="number" class="box"/> 
            <textarea placeholder="message" cols="30" rows="10" class="box"></textarea>
            <input type="submit" value="send message" class="btn"/>
        </form>
                </div>
            </section>
    )
}

export default contact
