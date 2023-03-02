import axios from 'axios';
const API_BASE_URL = "http://localhost:8080/Wellness/reviews";

class ManageReviews {

    createReview(review) {
        return axios.post(API_BASE_URL + '/' + review);
    }


    updateReview(review, reviewId) {
        return axios.put(API_BASE_URL + '/' + reviewId, review);
    }

    deleteReview(reviewId) {
        return axios.delete(API_BASE_URL + '/' + reviewId);
    }

    getReviewById(reviewId) {
        return axios.get(API_BASE_URL + '/' + reviewId);
    }

};
export default ManageReviews()