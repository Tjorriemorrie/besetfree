import React from 'react';


export default class Footer extends React.Component {

    render() {
        console.info('[Footer] render');
        return <footer>
            <div className="wrapper">
                <div className="boxes">
                    <div>
                        <p>
                            Tel: 061 914 2177
                            <br/>Practice at Centurion and Fourways
                            <br/><a href="mailto:info@besetfree.co.za">info@besetfree.co.za</a>
                        </p>
                    </div>
                    <div>
                        <h3>Nerine Jansen</h3>
                        <p>Natural healing practitioner</p>
                        <p>PRO 08329 T</p>
                    </div>
                    <div>
                        <p>For weekly information on
                            <br/>nutrition and other health
                            <br/>tips follow my <a href="https://www.facebook.com/besetfreelifestyle/">facebook page</a>
                        </p>
                    </div>
                </div>

                <p className="copy"><small>&copy; 2016 by Nerine Jansen.</small></p>
            </div>
        </footer>;
    }
}
