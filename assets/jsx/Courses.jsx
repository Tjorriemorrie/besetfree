import React from 'react';
import CourseBox from './CourseBox.jsx';


export default class Courses extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    title: 'Stress Management',
                    subtitle: 'Group Sessions',
                    name: 'Learn to live free',
                    date: '17 February 2016',
                    time: '10:00-12:00 (Refreshments included)',
                    venue: 'Conscious Healing Centre,Fourways',
                    cost: 'R500 per person',
                    description: 'Solve Problems, Cope with life, Lose a bad habit, Understand yourself, Change your life and Live Free. Informative Workshop incorporating effective wellness therapies including councelling, and relaxation techniques.',
                    tel: '0619142177',
                    email: 'info@besetfree.co.za',
                },
                {
                    title: 'Weight Wise',
                    subtitle: 'Workshop',
                    name: 'Claim the true you',
                    date: '20 March 2016',
                    time: '9:00-17:00 (snacks and refreshments included)',
                    venue: 'Conscious Healing Centre,Fourways',
                    cost: 'R600 per person',
                    description: 'Understand the physiology of your weight gain, hormone imbalances, Insulin resistance, the fat destroying diet, excercise not the dreaded word, work it off and be free. Informative Workshop incorporating practical advise on lifestyle and nutriion, including healy meal planning and a juicing demonatration.',
                    tel: '0619142177',
                    email: 'info@besetfree.co.za',
                },
                {
                    title: 'Stop Smoking Program',
                    subtitle: 'Group Sessions',
                    name: 'Breathe Free',
                    date: '20,23,26,28,29, March 2016',
                    time: '19:00-20:00 Evenings',
                    venue: 'Centurion, Bothalaan',
                    cost: 'For course R1500.00',
                    description: 'Learn about the Habit loop, The neurology of addition, Understand yourself and learn to cope with stress, Support with withdrawal, secrets to weight control without cigarettes, Change your habits and breathe Free. Informative Workshop incorporating detox, supplementation, stop smoking remedies, crave control, stress management, and emotional support.',
                    tel: '0619142177',
                    email: 'info@besetfree.co.za',
                },
                {
                    title: 'Find your Freedom',
                    subtitle: 'Lifestyle Weekend Retreat',
                    name: 'Find your freedom body mind and soul',
                    date: '6,7,8 April 2016',
                    time: 'Starts 14:00 6 April 2016 Ends 16:00 8 April 2016',
                    venue: '4 star Hennops River Estate',
                    cost: 'For Workshops, Spa treatments, Excersise programs, meals and accomodation included R7400,00 Per Person ',
                    description: 'A rejuvinating and educational holistic health experience in a tranquil natural setting. Learn what optimum living involves while relaxing and recouperating. Take that knowlegde home and heal your own life as well as your families. Find your freedom Body Mind and Soul. Please inquire about full program by clicking here. Informative Workshops, detox, Hydrotherapy,Food elimination diets, juicing, the value of Belief and prayer. ',
                    tel: '0619142177',
                    email: 'info@besetfree.co.za',
                },
                {
                    title: 'Heal Yourself',
                    subtitle: 'Nutrition and Lifestyle Worksop',
                    name: 'Eat Well, Live Well, Be Well',
                    date: '6 July 2016',
                    time: '9:00- 16:00',
                    venue: 'Conscious Healing Centre,Fourways',
                    cost: 'For Workshop R450 Per Person (Promotion; Bring a friend only pay R650 for two!) ',
                    description: 'What should you eat for Breakfast, Lunch and Dinner. Which foods to avoid and why, When to eat for optimal health benefit and weight loss, The lifestyle you were born to live, Supplementation, preventing constipation, Leaky Gut syndrome and allergies, Optimal Digestion, The need for Probiotics, Promoting Gut health. Warning signs. Informative Workshop incorporating healthy food preperation ideas, recipes and food alternatives for those with allergies',
                    tel: '0619142177',
                    email: 'info@besetfree.co.za',
                },
                {
                    title: 'Food & Lifestyle Education for Kids and their Parents',
                    subtitle: '',
                    name: 'Listen to your body',
                    date: '17 August 2016',
                    time: '18:00-19:00',
                    venue: 'Highschool Berg',
                    cost: 'Free (An Absolute must for Mothers) ',
                    description: 'Informative Workshop aimed at educating communities, schools, young children and their families on wellness and lifestyle principles. Teaches Kids to listen to their bodies and recocnise early warning sighns of disease, what to do to avoid becomming sick.  It teaches them to make the right life choices Include healty meals and lunch box ideas for kids, promote optimum concentration and brianpower at school, How ADHD could be related to what you eat and how to prevent it, Boost your kids acedemic and sport performance today!',
                    tel: '0619142177',
                    email: 'info@besetfree.co.za',
                }
            ]
        }
    }

    render() {
        console.info('[Courses] render');
        return <div className="courses">

            <div className="banner">
                <div className="wrapper">
                    <img src="/static/img/logo_small.png"/>
                    <h1>Events and Workshops</h1>
                </div>
            </div>

            <div className="wrapper">

                <div className="words">
                    <p>Heal Yourself</p>
                    <p>Eat Well</p>
                    <p>Feel Well</p>
                    <p>Be Well</p>
                </div>

                <div>
                    <img src="/static/img/the_water.jpg" />
                </div>

                {this.state.data.map((item, i) => {
                    return <CourseBox key={'course_' + i} course={item} />;
                })}

            </div>

        </div>;
    }
}
