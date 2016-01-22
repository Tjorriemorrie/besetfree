import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import Radium from 'radium';
import {} from 'react-bootstrap';
import ss from './Styles.jsx';
import Sidebar from './Sidebar.jsx';


class App extends React.Component {

    render() {
        console.info('[App] render');
        return <div className="flex-parent full-height">
            <Sidebar/>
            {React.cloneElement(this.props.children, {})}
        </div>;
    }
}


export default Radium(App);
