import React from 'react'
import FacebookPage from './../../facebook/containers/page'


const Footer = () => {

    return <footer>
        <div className="wrapper">
            <div className="boxes">

                <FacebookPage />

                <div>
                    <p>
                        Tel: 0421 854 996
                        <br/>Practice at The Hills
                        <br/><a href="mailto:info@besetfree.co.za">info@besetfree.co.za</a>
                    </p>
                    <hr/>
                    <h3>Nerine Jansen</h3>
                    <p>Natural healing practitioner</p>
                    <p>PRO 08329 T</p>
                </div>
            </div>

            <p className="copy">
                <small>&copy; 2018 by Nerine Jansen.</small>
            </p>
        </div>
    </footer>
}

export default Footer
