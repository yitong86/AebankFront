import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';



function ContactUs() {
  return (
    <form>
    <div className='contact-us'>
       <h1 className='contact' style={{textAlign:"center",textDecoration:"underline"}}>ContactUs</h1>
      </div>
      <div>
        <h3>Location</h3>
        </div>
        <div>
        <h2>214 Providence Pl #5620, Providence, RI 02903 </h2>
        </div>
        <div>
        <h3>Call us at (401)-000-0000</h3>
        <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=214%20Providence%20place%20RI&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
        </form>
  )
}




export default ContactUs