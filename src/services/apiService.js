import { comments, comment } from '../constant/state';

export const commentApi = {
    get() {
        return {
            method: 'comments',
            state: comments,
            params: ''
        }
    },
    getParams(id) {
        return {
            method: 'comments',
            state: comment,
            params: { postId: id }
        }
    }
}