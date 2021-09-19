import * as React from 'react';
import './Footer.css';
// import FacebookPage from './../../facebook/containers/page'


export default class Footer extends React.Component {

    public render() {
        return <footer>
            <div className="o-middle">
                <div className="c-boxes">

                    {/*<FacebookPage />*/}

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

                <p className="c-copy">
                    <small>&copy; 2018 by Nerine Jansen.</small>
                </p>
            </div>
        </footer>;
    }
}
