import React from 'react';
import classNames from 'classnames';


export default class CourseBox extends React.Component {

    render() {
        let { course } = this.props;
        console.info('[CourseBox] render', course);
        return <div className="course_box">
            <h3 className="title">{course.title}</h3>
            <h4 className="subtitle">{course.subtitle}</h4>
            <p>{course.name}</p>
            <p>{course.date}</p>
            <p>{course.time}</p>
            <p>{course.venue}</p>
            <p>{course.cost}</p>
            <p>{course.description}</p>
            <p>{course.tel}</p>
            <p>{course.email}</p>
        </div>;
    }
}
