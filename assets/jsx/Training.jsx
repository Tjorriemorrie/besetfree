import React from 'react';
import classNames from 'classnames';
import ServiceBox from './ServiceBox.jsx';


export default class Training extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cons: [
                {
                    img: '/static/img/workshop_cooking.jpg',
                    title: 'Group Cooking and Juicing Demos',
                    duration: '1 hr',
                    price: 'R200.00 pp',
                    description: 'Learn how to prepare healthy meals or medicinal foods. Learn quick and healthy ways of food preparation when on the go. What is the perfect breakfast,lunch and dinner to maintain optimal health?Raw food and juicing recipes made easy.',
                    expanded: false,
                },
                {
                    img: '/static/img/workshop_smoking.jpg',
                    title: 'Group Stop Smoking Program',
                    duration: '9 hrs',
                    price: 'R500.00 pp',
                    description: 'Changing habits can be hard but if you have made up your mind to stop smoking we can help. The Breathe Free 2 stop smoking program provides the necessary support and help with withdrawal symptoms and cravings. Make the investment in your health today! 9 contact sessions of 1 hr each; total R500.00 for package.',
                    expanded: false,
                },
                {
                    img: '/static/img/workshop_sign.jpg',
                    title: 'Workplace Wellness & Screening',
                    duration: 'varies',
                    price: 'R300.00 pp',
                    description: 'For Businesses, communities, churches and schools. Wellness screening of employees (pulse,blood pressure,BMI, fat muscle and water percentage, iris diagnosis, body PH test) followed by health awareness talks (1hour) or health and wellness workshops (1day)',
                    expanded: false,
                },
                {
                    img: '/static/img/workshop_awareness.jpg',
                    title: 'Health Awareness Talks',
                    duration: '1 hr',
                    price: 'R850.00 pp',
                    description: 'A One hour informative and engaging session aimed to educate listeners on health issues. A list of topics are available for your selection. Prepare to have your audience challenged to make the shift towards a more healthy way of life.',
                    expanded: false,
                },
                {
                    img: '/static/img/workshop_wellness.jpg',
                    title: 'Health and Wellness Workshops',
                    duration: '7 hr',
                    price: 'R1,500.00 pp',
                    description: 'These informative and engaging workshops are aimed to educate listeners on health issues. A list of topics are available for your selection.Prepare to have your audience challenged to make the shift towards a more healthy way of life.',
                    expanded: false,
                },
                {
                    img: '/static/img/training_wellness.jpg',
                    title: 'Wellness Retreats',
                    duration: 'Weekend (or 3 days)',
                    price: null,
                    description: 'A rejuvinating and educational holistic health experience in a tranquil natural setting. Learn what optimum living involves while relaxing and recouperating. Take that knowlegde home and heal your own life as well as your families. Find your freedom Body Mind and Soul. Please inquire about full program. Retreat consists of informative workshops, detox, hydrotherapy, food elimination diets, juicing, the value of belief and relaxation techniques.',
                    expanded: false,
                },
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
