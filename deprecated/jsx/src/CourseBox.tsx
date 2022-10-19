import * as React from 'react';
import './CourseBox.css';
import {ICourseData} from "./Courses";


interface ICourseBoxProps {
  course: ICourseData,
}

export default class CourseBox extends React.Component<ICourseBoxProps, {}> {

    public render() {
        const { course } = this.props

        return <div className="c-coursebox">
            <h3 className="title">{course.title}</h3>
            <h4 className="subtitle">{course.subtitle}</h4>
            <p>{course.name}</p>
            <p>{course.time}</p>
            <p>{course.venue}</p>
            <p>{course.cost}</p>
            <p>{course.description}</p>
        </div>
    }
}
