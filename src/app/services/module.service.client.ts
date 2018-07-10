export default class ModuleServiceClient {
  LESSON_URL = 'https://first-yanjianliao.herokuapp.com/api/course/';
  SINGLE_URL = 'https://first-yanjianliao.herokuapp.com/api/lesson/';


  findModulesForCourse(id) {
    return fetch(this.LESSON_URL + id + '/module')
      .then(response => response.json());
  }
}
