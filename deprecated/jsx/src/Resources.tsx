import * as React from 'react'
import {RouteProps} from 'react-router-dom'
import Banner from "./Banner"
import Footer from "./Footer"
import Navigation from "./Navigation"
import './Resources.css'
import ResourcesBread from "./ResourcesBread"
import ResourcesBreakfast from "./ResourcesBreakfast"
import ResourcesGrain from "./ResourcesGrain"
import ResourcesJuicing from "./ResourcesJuicing"


export interface IResourcesProps {
    pathname: string,
}


export default class Resources extends React.Component<RouteProps, {}> {

    public render() {
        return (
            <div>
                <Navigation/>
                {this.renderBody()}
                <Footer/>
            </div>
        )
    }

    public renderBody() {
        const location = this.props.location
        return <div>
            <Banner>Resources</Banner>

            <div className="o-wrapper">
                <ResourcesBread pathname={location!.pathname}/>
            </div>

            <div className="o-wrapper">
                <ResourcesBreakfast pathname={location!.pathname} />
            </div>

            <div className="o-wrapper">
                <ResourcesGrain pathname={location!.pathname} />
            </div>

            <div className="o-wrapper">
                <ResourcesJuicing pathname={location!.pathname} />
            </div>

        </div>
    }
}
