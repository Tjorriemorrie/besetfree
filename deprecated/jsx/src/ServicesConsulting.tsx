import * as React from 'react';
import ServiceBox from './ServiceBox';


export interface IServiceData {
    description: string,
    duration: string,
    expanded: boolean,
    img: string,
    price: string,
    title: string,
}

interface IServicesState {
    cons: IServiceData[],
}

export default class ServicesConsulting extends React.Component<{}, IServicesState> {

    constructor(props: any) {
        super(props);
        this.state = {
            cons: [
                {
                    description: 'Individualized Care Programs, Consultations & Examination sessions are available. Clients receive a health screening to determine their current health status before recommending specific treatments and health coaching protocols.',
                    duration: '1 hr',
                    expanded: false,
                    img: '/static/img/con_individual.jpg',
                    price: 'R500.00 pp',
                    title: 'Individual Consultation',
                },
                {
                    description: 'International clients can make use of this unique feature. Also convenient for clients who has already received screening and who needs advice or follow up.',
                    duration: '30 min',
                    expanded: false,
                    img: '/static/img/con_skype.jpg',
                    price: 'R250.00 pp',
                    title: '1on1 Online Consultation',
                },
                {
                    description: 'Family, group or couple packages include discounted rates. R300 per person (Health screening, nutritional and lifestyle coaching included-Medicines/supplements or any additional therapies excluded).Please contact me for additional info or terms of service.',
                    duration: '1 hr',
                    expanded: false,
                    img: '/static/img/con_family.jpg',
                    price: 'R400.00 pp',
                    title: 'Family/Couple/Group Consulting',
                },
                {
                    description: 'Claim the true you! The client receives an individualized food/supplement program aimed at healing and boosting vitality. Detox and cleansing of the gut as well as closely monitoring fat/muscle/water percentage gives reliable indicators of results.',
                    duration: '1 hr',
                    expanded: false,
                    img: '/static/img/con_weight.jpg',
                    price: 'R500.00 pp',
                    title: 'Sustainable Weight Management',
                },
                {
                    description: 'Learn to live free. Participants complete a stress measuring questionnaire followed by a presentation and information session regarding stress, stress statistics and management. We finish up with a practical stress reduction technique. Duration 1 hour',
                    duration: '1 hr',
                    expanded: false,
                    img: '/static/img/con_stress.jpg',
                    price: 'R350.00 pp',
                    title: 'Stress Management techniques',
                },
                {
                    description: 'Join the Facebook group to receive daily healthy recipe posts, wellness tips, or news. Keep in touch with like minded individuals who support each other and value their health.',
                    duration: '1 hr',
                    expanded: false,
                    img: '/static/img/con_recipe.jpg',
                    price: 'Free',
                    title: 'Recipes & Daily Health Tips',
                },
                {
                    description: 'Find the root cause of your smoking habit and make a change. Four sessions of R500 are required as a package. Those on a string budget can join the group Stop smoking program for a reduced rate.',
                    duration: '1 hr',
                    expanded: false,
                    img: '/static/img/con_smoking.jpg',
                    price: 'R500.00 pp',
                    title: 'Stop Smoking Support',
                }
            ]
        };
    }

    public render() {
        const cons = this.state.cons;
        return <div className="c-services-grid">
            {cons.map((con: IServiceData, i: number) => {
                return <ServiceBox key={'con_' + i} info={con} i={i} toggle={this.toggleExpanded.bind(this, i)} />;
            })}
        </div>
    }

    public toggleExpanded(i: number) {
        const { cons } = this.state;
        cons[i].expanded = !cons[i].expanded;
        this.setState({cons});
    }
}


