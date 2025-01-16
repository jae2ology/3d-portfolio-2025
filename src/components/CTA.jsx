import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="cta">
        <p className="cta-text flex justify-center items-center">Looking for an intern or a full-time developer?
            <br className="sm:block hidden"/>
            Let's work together!
            <Link to="/contact" className="btn flex justify-center items-center">
                Contact Me!
            </Link>
        </p>
    </section>
  )
}

export default CTA