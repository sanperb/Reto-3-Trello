import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const Footer = props => {
  /* Devuelve todo el contenido del footer */
  return (<footer className="">
    <div className="container-fluid">
      <div className="rrss">
        <div className="row justify-content-md-center" style={{ fontSize: "2em", color: '#cae39a' }}>
          <div className="col">
            <a className="twitter" href="https://twitter.com/">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <div className="col">
            <a className="facebook" href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
          <div className="col">
            <a className="instagram" href="https://instagram.com/">

              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div className="col">
            <a className="pinterest" href="https://pinterest.com/">

              <FontAwesomeIcon icon={faPinterest} />
            </a>
          </div>
          <div className="col">
            <a className="linkedin" href="https://linkedin.com/">

              <FontAwesomeIcon icon={faLinkedin} />
              </a>
          </div>
            <div className="col">
              <a className="githublogo" href="https://github.com/sanperb">

                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <div className="col">
              <a className="googleplus" href="https://googleplus.com/">

                <FontAwesomeIcon icon={faGooglePlusG} />
              </a>
            </div>

          </div>
        </div>
      </div>
      <div className="copyright-container">
        <div className="row text-center">
          <div className="col-12">© 2020 Copyright:
  <a className="github" href="https://github.com/sanperb"> Github/sanperb</a>
          </div>
        </div>
      </div>

  </footer>)



}


export default Footer;