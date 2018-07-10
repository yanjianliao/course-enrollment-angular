export class LessonServiceClient {

  LESSON_URL = 'https://first-yanjianliao.herokuapp.com/api/course/';

  findLessonsForModule(courseId, moduleId) {
    console.log(this.LESSON_URL + courseId + /module/ + moduleId + '/lesson');
    return fetch(this.LESSON_URL + courseId + /module/ + moduleId + '/lesson')
      .then(response => response.json());
  }
}
