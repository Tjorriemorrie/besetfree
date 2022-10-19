import * as React from 'react';
import ServiceBox from './ServiceBox'


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

export default class ServicesTraining extends React.Component<{}, IServicesState> {

    constructor(props: any) {
        super(props)
        this.state = {
            cons: [
                {
                    description: 'Learn how to prepare healthy meals or medicinal foods. Learn quick and healthy ways of food preparation when on the go. What is the perfect breakfast,lunch and dinner to maintain optimal health?Raw food and juicing recipes made easy.',
                    duration: '1 hr',
                    expanded: false,
                    img: '/static/img/workshop_cooking.jpg',
                    price: 'R200.00 pp',
                    title: 'Group Cooking and Juicing Demos',
                },
                {
                    description: 'Changing habits can be hard but if you have made up your mind to stop smoking we can help. The Breathe Free 2 stop smoking program provides the necessary support and help with withdrawal symptoms and cravings. Make the investment in your health today! 9 contact sessions of 1 hr each; total R500.00 for package.',
                    duration: '9 hrs',
                    expanded: false,
                    img: '/static/img/workshop_smoking.jpg',
                    price: 'R500.00 pp',
                    title: 'Group Stop Smoking Program',
                },
                {
                    description: 'For Businesses, communities, churches and schools. Wellness screening of employees (pulse,blood pressure,BMI, fat muscle and water percentage, iris diagnosis, body PH test) followed by health awareness talks (1hour) or health and wellness workshops (1day)',
                    duration: 'varies',
                    expanded: false,
                    img: '/static/img/workshop_sign.jpg',
                    price: 'R300.00 pp',
                    title: 'Workplace Wellness & Screening',
                },
                {
                    description: 'A One hour informative and engaging session aimed to educate listeners on health issues. A list of topics are available for your selection. Prepare to have your audience challenged to make the shift towards a more healthy way of life.',
                    duration: '1 hr',
                    expanded: false,
                    img: '/static/img/workshop_awareness.jpg',
                    price: 'R850.00 for session',
                    title: 'Health Awareness Talks',
                },
                {
                    description: 'These informative and engaging workshops are aimed to educate listeners on health issues. A list of topics are available for your selection.Prepare to have your audience challenged to make the shift towards a more healthy way of life.',
                    duration: '7 hr',
                    expanded: false,
                    img: '/static/img/workshop_wellness.jpg',
                    price: 'R1,500.00 for session',
                    title: 'Health and Wellness Workshops',
                },
                {
                    description: 'A rejuvinating and educational holistic health experience in a tranquil natural setting. Learn what optimum living involves while relaxing and recouperating. Take that knowlegde home and heal your own life as well as your families. Find your freedom Body Mind and Soul. Please inquire about full program. Retreat consists of informative workshops, detox, hydrotherapy, food elimination diets, juicing, the value of belief and relaxation techniques.',
                    duration: 'Weekend (or 3 days)',
                    expanded: false,
                    img: '/static/img/training_wellness.jpg',
                    price: '',
                    title: 'Wellness Retreats',
                },
            ]
        }
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
