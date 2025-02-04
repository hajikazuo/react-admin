import axios from 'axios';
import { Post } from '../../models/Post';


export const fetchPosts = async (): Promise<Post[]> => {
    const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  
};
