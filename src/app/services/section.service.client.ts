export default class SectionServiceClient {
  SECTION_URL = 'http://localhost:3000/api/course/CID/section';
  BASE_URL = 'http://localhost:3000/api/';

  enrollStudentInSection(sectionId) {
    const url = this.BASE_URL + 'section/' + sectionId + '/enrollment';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    }).then(response => response.json());
  }

  findSectionForStudent() {
    const url = this.BASE_URL + 'student/section';
    return fetch(url, {
      method: 'get',
      credentials: 'include'
    }).then(response => response.json());
  }


  createSection(sectionName, seats, courseId) {
    const section = {
      name: sectionName,
      seats: seats,
      courseId: courseId
    };

    return fetch(this.SECTION_URL.replace('CID', courseId), {
      method: 'post',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }


  findSectionsForCourse(courseId) {
    return fetch(this.SECTION_URL.replace('CID', courseId))
      .then(response => response.json());
  }


  dropSection(enrollment) {
    return fetch(this.BASE_URL + 'student/' + enrollment.student + '/section/' + enrollment.section , {
      method: 'delete',
      credentials: 'include'
    });
  }


}
