import React from 'react';
import classNames from 'classnames';
import ServiceBox from './ServiceBox.jsx';


export default class Training extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cons: [
                {
                    img: '/static/img/con_individual.jpg',
                    title: 'Cooking and Juicing Demos',
                    duration: '1 hr',
                    price: 'R200.00',
                    description: 'Learn how to prepare healthy meals or medicinal foods. Learn quick and healthy ways of food preparation when on the go. What is the perfect breakfast,lunch and dinner to maintain optimal health?Raw food and juicing recipes made easy. R200 per person rates.',
                    expanded: false,
                },
                {
                    img: '/static/img/con_family.jpg',
                    title: 'Stop Smoking Program',
                    duration: '9 hr',
                    price: 'R500.00',
                    description: 'Changing habits can be hard but if you have made up your mind to stop smoking we can help. The breathe free 2 stop smoking program provides the necessary support and help with withdrawal symptoms and cravings. Make the investment in your health today!',
                    expanded: false,
                },
                {
                    img: '/static/img/con_weight.jpg',
                    title: 'Workplace Wellness & Screening',
                    duration: '1 hr',
                    price: 'R300.00',
                    description: 'For Businesses, communities, churches and schools. Wellness screening of employees (pulse,blood pressure,BMI, fat muscle and water percentage, iris diagnosis, body PH test) followed by health awareness talks (1hour) or health and wellness workshops (1day)',
                    expanded: false,
                },
                {
                    img: '/static/img/con_stress.jpg',
                    title: 'Stress Management techniques',
                    duration: '1 hr 30 min',
                    price: 'R350.00',
                    description: 'Learn to live free. Participants complete a stress measuring questionnaire followed by a presentation and information session regarding stress, stress statistics and management. We finish up with a practical stress reduction technique. Duration 1 hour',
                    expanded: false,
                },
                {
                    img: '/static/img/con_recipe.jpg',
                    title: 'Health Awareness Talks',
                    duration: '1 hr',
                    price: 'R850.00',
                    description: 'A One hour informative and engaging session aimed to educate listeners on health issues. A list of topics are available for your selection. Prepare to have your audience challenged to make the shift towards a more healthy way of life.',
                    expanded: false,
                },
                {
                    img: '/static/img/con_smoking.jpg',
                    title: 'Health and Wellness Workshops',
                    duration: '7 hr',
                    price: 'R1 500.00',
                    description: 'These informative and engaging workshops are aimed to educate listeners on health issues. A list of topics are available for your selection.Prepare to have your audience challenged to make the shift towards a more healthy way of life. 1 Day lunch exluded.',
                    expanded: false,
                }
            ]
        };
    }

    render() {
        console.info('[Training] render');
        return <div className="wrapper">

            <div className="services_grid">
                {this.state.cons.map((con, i) => {
                    return <ServiceBox key={'tra' + i} info={con} i={i} toggle={() => this.toggleExpanded(i)} />;
                }, this)}
            </div>

        </div>;
    }

    toggleExpanded(i) {
        console.info('[Training] toggleExpanded', i);
        let { cons } = this.state;
        cons[i]['expanded'] = !cons[i]['expanded'];
        this.setState({cons: cons});
    }
}
