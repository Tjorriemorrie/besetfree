import * as React from 'react';
import './ServiceBox.css';
import {IServiceData} from "./ServicesConsulting";


export interface IPropies {
  info: IServiceData,
  i: number,
  toggle: any,
}

export default class ServiceBox extends React.Component<IPropies, {}> {

    public render() {
        const {info, i, toggle} = this.props;
        let bg: any = null;
        let desc: string = '';
        let expand: any = null;
        if (info.expanded) {
            bg = '';
            desc = info.description;
            expand = <span className="service-box__toggle" onClick={toggle.bind(this, i)}>show less</span>;
        }
        else {
            bg = <div className="service-box__bg" style={{backgroundImage: 'url(' + info.img + ')'}}/>;
            desc = info.description.replace(/(([^\s]+\s\s*){7})(.*)/, '$1…');
            expand = <span className="service-box__toggle" onClick={toggle.bind(this, i)}>show more</span>;
        }
        return <div className="service-box">
            {bg}
            <div className="service-box__text">
                <div className="service-box__title">{info.title}</div>
                <div className="service-box__details">{info.duration} { (info.price) ? <span>|</span> : ''} {info.price}</div>
                <div className="service-box__description">{desc} {expand}</div>
            </div>
        </div>
    }
}
