export default class CourseServiceClient {

  COURSE_URL = 'https://first-yanjianliao.herokuapp.com/api/course';

  findAllCourses() {
    return fetch(this.COURSE_URL)
      .then(response => response.json());
  }
}
