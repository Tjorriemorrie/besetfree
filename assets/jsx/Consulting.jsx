import React from 'react';
import classNames from 'classnames';
import ServiceBox from './ServiceBox.jsx';


export default class Consulting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cons: [
                {
                    img: '/static/img/con_individual.jpg',
                    title: 'Individual Consultation',
                    duration: '1 hr',
                    price: 'R500.00 pp',
                    description: 'Individualized Care Programs, Consultations & Examination sessions are available. Clients receive a health screening to determine their current health status before recommending specific treatments and health coaching protocols.',
                    expanded: false,
                },
                {
                    img: '/static/img/con_skype.jpg',
                    title: '1on1 Online Consultation',
                    duration: '30 min',
                    price: 'R250.00 pp',
                    description: 'International clients can make use of this unique feature. Also convenient for clients who has already received screening and who needs advice or follow up.',
                    expanded: false,
                },
                {
                    img: '/static/img/con_family.jpg',
                    title: 'Family/Couple/Group Consulting',
                    duration: '1 hr',
                    price: 'R300.00 pp',
                    description: 'Family, group or couple packages include discounted rates. R300 per person (Health screening, nutritional and lifestyle coaching included-Medicines/supplements or any additional therapies excluded).Please contact me for additional info or terms of service.',
                    expanded: false,
                },
                {
                    img: '/static/img/con_weight.jpg',
                    title: 'Sustainable Weight Management',
                    duration: '1 hr',
                    price: 'R500.00 pp',
                    description: 'Claim the true you! The client receives an individualized food/supplement program aimed at healing and boosting vitality. Detox and cleansing of the gut as well as closely monitoring fat/muscle/water percentage gives reliable indicators of results.',
                    expanded: false,
                },
                {
                    img: '/static/img/con_stress.jpg',
                    title: 'Stress Management techniques',
                    duration: '1 hr',
                    price: 'R350.00 pp',
                    description: 'Learn to live free. Participants complete a stress measuring questionnaire followed by a presentation and information session regarding stress, stress statistics and management. We finish up with a practical stress reduction technique. Duration 1 hour',
                    expanded: false,
                },
                {
                    img: '/static/img/con_recipe.jpg',
                    title: 'Recipes & Daily Health Tips',
                    duration: '1 hr',
                    price: 'Free',
                    description: 'Join the Facebook group to receive daily healthy recipe posts, wellness tips, or news. Keep in touch with like minded individuals who support each other and value their health.',
                    expanded: false,
                },
                {
                    img: '/static/img/con_smoking.jpg',
                    title: 'Stop Smoking Support',
                    duration: '1 hr',
                    price: 'R500.00 pp',
                    description: 'Find the root cause of your smoking habit and make a change. Four sessions of R500 are required as a package. Those on a string budget can join the group Stop smoking program for a reduced rate.',
                    expanded: false,
                }
            ]
        };
    }

    render() {
        console.info('[Consulting] render');
        return <div className="wrapper">

            <div className="services_grid">
                {this.state.cons.map((con, i) => {
                    return <ServiceBox key={'con_' + i} info={con} i={i} toggle={() => this.toggleExpanded(i)} />;
                })}
            </div>

        </div>;
    }

    toggleExpanded(i) {
        console.info('[Consulting] toggleExpanded', i);
        let { cons } = this.state;
        cons[i]['expanded'] = !cons[i]['expanded'];
        this.setState({cons: cons});
    }
}
