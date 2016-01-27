import React from 'react';import ReactDOM from 'react-dom';
import Sidebar from './Sidebar.jsx';


export default class App extends React.Component {

    render() {
        console.info('[App] render');
        return <div className="flex-parent full-height">
            <Sidebar/>
            {React.cloneElement(this.props.children, {})}
        </div>;
    }
}
