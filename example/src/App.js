import React from 'react'

import { Footer } from 'footer-component'
import 'footer-component/dist/index.css'
const contactData = [{ type: "facebook", src: "/assets/facebook.svg", link: "https://www.facebook.com" }, { type: "twitter", src: "/assets/twitter.svg", link: "https://www.twitter.com" }]
const copyrightsData = [{ locale: "en", data: "Daimler AG. All Rights Reserved." }, { locale: "de", data: " Daimler AG. Alle Rechte vorbehalten." }]

const App = () => {

  return (
    <div >
      <Footer position={'sticky'} contact={contactData} theme={'gray'} copyright={copyrightsData} />
    </div>
  )

}

export default App
