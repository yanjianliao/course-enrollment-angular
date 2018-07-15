export default class TopicServiceClient {
  LESSON_URL = 'https://first-yanjianliao.herokuapp.com/api/course/';

  findTopicsForLesson(courseId, moduleId, lessonId) {
    return fetch(this.LESSON_URL + courseId + '/module/' + moduleId + '/lesson/' + lessonId + '/topic')
      .then(response => response.json());
  }
}
