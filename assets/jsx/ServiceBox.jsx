import React from 'react';
import classNames from 'classnames';


export default class ServiceBox extends React.Component {

    render() {
        let { info, i, toggle } = this.props;
        console.info('[ServiceBox] render', info);
        let bg, desc, expand;
        if (info.expanded) {
            bg = '';
            desc = info.description;
            expand = <span className="show_toggle" onClick={() => toggle(i)}>show less</span>;
        }
        else {
            bg = <div className="bg" style={{backgroundImage: 'url(' + info.img + ')'}}></div>;
            desc = info.description.replace(/(([^\s]+\s\s*){8})(.*)/, '$1…');
            expand = <span className="show_toggle" onClick={() => toggle(i)}>show more</span>;
        }
        return <div className="service_box">
            {bg}
            <div className="text">
                <div className="title">{info.title}</div>
                <div className="details">{info.duration} <span>|</span> {info.price}</div>
                <div className="description">{desc} {expand}</div>
            </div>
        </div>;
    }
}
