import React from 'react';


export default class Footer extends React.Component {

    componentDidMount() {
        console.info('[Footer] mounted');
        document.addEventListener('fb_init', e => FB.XFBML.parse());
    }

    render() {
        console.info('[Footer] render');
        return <footer>
            <div className="wrapper">
                <div className="boxes">

                    <div className="fb-page"
                         data-href="https://www.facebook.com/besetfreelifestyle/"
                         data-tabs="timeline"
                         data-width="500"
                         data-height="400"
                         data-small-header="true"
                         data-adapt-container-width="false"
                         data-hide-cover="false"
                         data-show-facepile="false">
                        <blockquote cite="https://www.facebook.com/besetfreelifestyle/"
                                    className="fb-xfbml-parse-ignore">
                            <a href="https://www.facebook.com/besetfreelifestyle/">Be Set Free</a>
                        </blockquote>
                    </div>

                    <div>
                        <p>
                            Tel: 061 914 2177
                            <br/>Practice at Centurion and Fourways
                            <br/><a href="mailto:info@besetfree.co.za">info@besetfree.co.za</a>
                        </p>
                        <hr/>
                        <h3>Nerine Jansen</h3>
                        <p>Natural healing practitioner</p>
                        <p>PRO 08329 T</p>
                    </div>
                </div>

                <p className="copy">
                    <small>&copy; 2016 by Nerine Jansen.</small>
                </p>
            </div>
        </footer>;
    }
}
