import axios from "axios";

export function allArticles(topic, sortBy) {
  if (topic) {
    return axios
      .get(
        `https://matt-inman-backend-project.onrender.com/api/articles?topic=${topic}&sortBy=${sortBy}`
      )
      .then(({ data }) => {
        return data;
      });
  } else
    return axios
      .get(
        `https://matt-inman-backend-project.onrender.com/api/articles?sortBy=${sortBy}`
      )
      .then(({ data }) => {
        return data;
      });
}
export function singleArticle(article_id) {
  return axios
    .get(
      `https://matt-inman-backend-project.onrender.com/api/articles/${article_id}`
    )
    .then(({ data }) => {
      return data;
    });
}
export function commentsFunc(article_id) {
  return axios
    .get(
      `https://matt-inman-backend-project.onrender.com/api/articles/${article_id}/comments`
    )
    .then(({ data }) => {
      return data;
    });
}
export function changeVote(article_id, vote) {
  return axios
    .patch(
      `https://matt-inman-backend-project.onrender.com/api/articles/${article_id}`,
      { inc_votes: vote }
    )
    .then(({ data }) => {
      return data;
    });
}
export function addComment(article_id, addedComment, username) {
  return axios
    .post(
      `https://matt-inman-backend-project.onrender.com/api/articles/${article_id}/comments`,
      { author: username, body: addedComment }
    )
    .then(({ data }) => {
      return data;
    });
}
export function getTopics() {
  return axios
    .get(`https://matt-inman-backend-project.onrender.com/api/topics`)
    .then(({ data }) => {
      return data;
    });
}
