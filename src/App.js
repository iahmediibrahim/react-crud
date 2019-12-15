import React, { Component } from 'react';
import './App.css';
import CourseForm from './components/CourseForm/CourseForm';
import CourseList from './components/CourseList/CourseList';
class App extends Component {
  state = {
    courses: [ { name: 'HTML' }, { name: 'css' }, { name: 'js' } ],
    current: '',
  };

  updateCourse = (e) => {
    this.setState({ current: e.target.value });
  };
  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({ name: current });
    this.setState({ courses, current: '' });
  };
  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({ courses });
  };
  editCourse = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value;
    this.setState({ courses });
  };

  render() {
    const { courses } = this.state;
    const courseList = courses.map((course, index) => {
      return (
        <CourseList
          details={course.name}
          key={index}
          index={index}
          editCourse={this.editCourse}
          deleteCourse={this.deleteCourse}
        />
      );
    });
    return (
      <section>
        <h2>Add course</h2>
        <CourseForm current={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse} />
        <ul>{courseList}</ul>
      </section>
    );
  }
}

export default App;
