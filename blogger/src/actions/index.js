import _ from 'lodash';
import jsonplaceholder from '../apis/jsonPlaceholder';

// arrow function that returns an arrow function, receieving an argument of dispatch
// export const fetchPostsAndUsers = () => async (dispatch, getState) => {
//     console.log('about to fetch posts');
//     await dispatch(fetchPosts());

//     const userIds = _.uniq(_.map(getState().posts, 'userId'));
//     userIds.forEach((id) => dispatch(fetchUser(id)));
// };

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    console.log('about to fetch posts');
    await dispatch(fetchPosts());

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach((id) => dispatch(fetchUser(id)))
        .value();
};

export const fetchPosts = () => {
    return async function (dispatch, getState) {
        const { data } = await jsonplaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: data });
    };
};

export const fetchUser = (id) => async (dispatch) => {
    const response = await jsonplaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
};

// with lodash memoize
// export const fetchUser = id => dispatch =>{

//     _fetchUser(id, dispatch)
// }

// const _fetchUser = _.memoize(async (id,dispatch) => {
//     const response = await jsonplaceholder.get(`/users/${id}`)

//     dispatch({type: 'FETCH_USER', payload: response.data})
// })
