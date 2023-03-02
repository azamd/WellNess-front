import axios from 'axios';
const API_BASE_URL = "http://localhost:8089/Wellness/articles";

class ManageArticles {

    createArticle(article) {
        return axios.post(API_BASE_URL + '/add-article', article);
    }


    updateArticle(articleId, article) {
        return axios.put(API_BASE_URL + '/edit-article/' + articleId, article);
    }

    deleteArticle(articleId) {
        return axios.delete(API_BASE_URL + '/remove-article/' + articleId);
    }

    getArticleById(articleId) {
        return axios.get(API_BASE_URL + '/' + articleId);
    }

    getArticles() {
        return axios.get(API_BASE_URL + '/retrieve-all-articles');
    }

}
export default new ManageArticles()