import * as React from 'react';
import Banner from "./Banner";
import CourseBox from './CourseBox'
import './Courses.css';
import Footer from "./Footer";
import Navigation from "./Navigation";


export interface ICourseData {
    title: string,
    subtitle: string,
    name: string,
    date: string,
    time: string,
    venue: string,
    cost: string,
    description: string,
    tel: string,
    email: string,
}

interface IServicesState {
    data: ICourseData[],
}

export default class Courses extends React.Component<{}, IServicesState> {

    constructor(props: any) {
        super(props);
        this.state = {
            data: [
                {
                    cost: 'R500 per person',
                    date: '17 February 2021',
                    description: 'Solve Problems, Cope with life, Lose a bad habit, Understand yourself, Change your life and Live Free. Informative Workshop incorporating effective wellness therapies including councelling, and relaxation techniques.',
                    email: 'info@besetfree.co.za',
                    name: 'Learn to live free',
                    subtitle: 'Group Sessions',
                    tel: '0619142177',
                    time: '10:00-12:00 (Refreshments included)',
                    title: 'Stress Management',
                    venue: 'Conscious Healing Centre,Fourways',
                },
                {
                    cost: 'R600 per person',
                    date: '20 March 2021',
                    description: 'Understand the physiology of your weight gain, hormone imbalances, Insulin resistance, the fat destroying diet, excercise not the dreaded word, work it off and be free. Informative Workshop incorporating practical advise on lifestyle and nutriion, including healy meal planning and a juicing demonatration.',
                    email: 'info@besetfree.co.za',
                    name: 'Claim the true you',
                    subtitle: 'Workshop',
                    tel: '0619142177',
                    time: '9:00-17:00 (snacks and refreshments included)',
                    title: 'Weight Wise',
                    venue: 'Conscious Healing Centre,Fourways',
                },
                {
                    cost: 'For course R1500.00',
                    date: '20,23,26,28,29, March 2021',
                    description: 'Learn about the Habit loop, The neurology of addition, Understand yourself and learn to cope with stress, Support with withdrawal, secrets to weight control without cigarettes, Change your habits and breathe Free. Informative Workshop incorporating detox, supplementation, stop smoking remedies, crave control, stress management, and emotional support.',
                    email: 'info@besetfree.co.za',
                    name: 'Breathe Free',
                    subtitle: 'Group Sessions',
                    tel: '0619142177',
                    time: '19:00-20:00 Evenings',
                    title: 'Stop Smoking Program',
                    venue: 'Centurion, Bothalaan',
                },
                {
                    cost: 'For Workshops, Spa treatments, Excersise programs, meals and accomodation included R7400,00 Per Person ',
                    date: '6,7,8 April 2021',
                    description: 'A rejuvinating and educational holistic health experience in a tranquil natural setting. Learn what optimum living involves while relaxing and recouperating. Take that knowlegde home and heal your own life as well as your families. Find your freedom Body Mind and Soul. Please inquire about full program by clicking here. Informative Workshops, detox, Hydrotherapy,Food elimination diets, juicing, the value of Belief and prayer. ',
                    email: 'info@besetfree.co.za',
                    name: 'Find your freedom body mind and soul',
                    subtitle: 'Lifestyle Weekend Retreat',
                    tel: '0619142177',
                    time: 'Starts 14:00 6 April 2021 Ends 16:00 8 April 2021',
                    title: 'Find your Freedom',
                    venue: '4 star Hennops River Estate',
                },
                {
                    cost: 'For Workshop R450 Per Person (Promotion; Bring a friend only pay R650 for two!) ',
                    date: '6 July 2021',
                    description: 'What should you eat for Breakfast, Lunch and Dinner. Which foods to avoid and why, When to eat for optimal health benefit and weight loss, The lifestyle you were born to live, Supplementation, preventing constipation, Leaky Gut syndrome and allergies, Optimal Digestion, The need for Probiotics, Promoting Gut health. Warning signs. Informative Workshop incorporating healthy food preperation ideas, recipes and food alternatives for those with allergies',
                    email: 'info@besetfree.co.za',
                    name: 'Eat Well, Live Well, Be Well',
                    subtitle: 'Nutrition and Lifestyle Worksop',
                    tel: '0619142177',
                    time: '9:00- 16:00',
                    title: 'Heal Yourself',
                    venue: 'Conscious Healing Centre,Fourways',
                },
                {
                    cost: 'Free (An Absolute must for Mothers) ',
                    date: '17 August 2021',
                    description: 'Informative Workshop aimed at educating communities, schools, young children and their families on wellness and lifestyle principles. Teaches Kids to listen to their bodies and recocnise early warning sighns of disease, what to do to avoid becomming sick.  It teaches them to make the right life choices Include healty meals and lunch box ideas for kids, promote optimum concentration and brianpower at school, How ADHD could be related to what you eat and how to prevent it, Boost your kids acedemic and sport performance today!',
                    email: 'info@besetfree.co.za',
                    name: 'Listen to your body',
                    subtitle: '',
                    tel: '0619142177',
                    time: '18:00-19:00',
                    title: 'Food & Lifestyle Education for Kids and their Parents',
                    venue: 'Highschool Berg',
                }
            ]
        }
    }

    public render() {
        return (
            <div>
                <Navigation/>
                {this.renderBody()}
                <Footer/>
            </div>
        );
    }

    public renderBody() {
        return <div className="c-courses">

            <Banner>Events and Workshops</Banner>

            <div className="o-wrapper">
                <div className="c-courses__words">
                    <p>Heal Yourself</p>
                    <p>Eat Well</p>
                    <p>Feel Well</p>
                    <p>Be Well</p>
                </div>
                <div>
                    <img src="/static/img/the_water.jpg" />
                </div>
            </div>

            <div className="o-wrapper">
                {this.state.data.slice(0, 3).map((item, i) => {
                    return <CourseBox key={'course_' + i} course={item} />;
                })}
            </div>

            <div className="o-wrapper">
                <div className="c-courses__insert">
                    <p>For enquiries please <a href="/contact">contact me</a>.</p>
                </div>
            </div>

            <div className="o-wrapper">
                {this.state.data.slice(3).map((item, i) => {
                    return <CourseBox key={'course_' + (i + 3)} course={item} />;
                })}
            </div>

        </div>;
    }
}
