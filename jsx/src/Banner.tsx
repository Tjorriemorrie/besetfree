import * as React from 'react';
import './Banner.css';


export default class Banner extends React.Component {

    public render() {
        const children = this.props.children;
        return (
            <div className="o-banner">
                <div className="o-banner__wrapper">
                    <img className="o-banner__img" src="/static/img/logo_small.png"/>
                    <h1 className="o-banner__heading">{children}</h1>
                </div>
            </div>
        )
    }
}
