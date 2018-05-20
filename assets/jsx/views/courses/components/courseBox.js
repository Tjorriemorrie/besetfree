import React from 'react'
import classNames from 'classnames'


class CourseBox extends React.Component {

    render() {
        let { course } = this.props

        console.info('[CourseBox] render', course)

        return <div className="course_box">
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

export default CourseBox
