// export default(posts=[],action)=>{
//     switch (action.type) {
//         case 'FETCH_ALL':
//             return posts;
//         case 'CREATE':
//             return posts;
//         default:
//             return posts;
//     }
// }
// const initialState = []; // Default initial state

// const postsReducer = (posts = initialState, action) => {
//   switch (action.type) {
//     case'DELETE':
//       return posts.filter((post)=>post._id != action.payload);
//     case'UPDATE':
//       return posts.map((post)=>post._id=== action.payload._id ? action.payload : post);
//     case 'FETCH_ALL':
//       return action.payload; // Assuming action.payload contains the fetched posts
//     case 'CREATE':
//       return [...posts, action.payload]; // Assuming action.payload contains the new post
//     default:
//       return posts;
//   }
// };
import { FETCH_ALL, CREATE, UPDATE, DELETE,LIKE } from '../constants/actionTypes';

export default (posts = [], action) => {
  switch (action.type) {
    case DELETE:
      return posts.filter((post)=>post._id != action.payload);
    case UPDATE :
    case LIKE :
      return posts.map((post)=>post._id=== action.payload._id ? action.payload : post);
    case FETCH_ALL :
      return action.payload; // Assuming action.payload contains the fetched posts
    case CREATE:
      return [...posts, action.payload]; // Assuming action.payload contains the new post
    default:
      return posts;
  }
};