import React from 'react'

const Contact = () => {
  return (
    <section className='contact' id='contact'>
        <h1 className='heading'>
            <span>Contact</span> us
        </h1>
        <div className='row'>
             {/* <iframe 
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.684950039493!2d72.8486090739442!3d19.07758458212733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c902001a5969%3A0x9fa17ebc80fc492d!2sCelini!5e0!3m2!1sen!2sin!4v1696395803980!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">
            </iframe>  */}
            <form>
                <h3>Get in Touch</h3>
                <div className='inputBox'>
                    <span className='fas fa-user'></span>
                    <input type='text' placeholder='name'/>
                </div>
                <div className='inputBox'>
                    <span className='fas fa-envelope'></span>
                    <input type='email' placeholder='email'/>
                </div>
                <div className='inputBox'>
                    <span className='fas fa-phone'></span>
                    <input type='number' placeholder='number'/>
                </div>
                <input type='submit' value='contact now' className='btn'/>
            </form>
        </div>
    </section>
  )
}

export default Contact;
