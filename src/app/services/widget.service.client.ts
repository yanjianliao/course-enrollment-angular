export default class WidgetServiceClient {
  WIDGET_API = 'https://first-yanjianliao.herokuapp.com/api/topic/';

  findWidgetsForTopic(topicId) {
    return fetch(this.WIDGET_API + topicId + '/widget')
      .then(response => response.json());
  }
}
