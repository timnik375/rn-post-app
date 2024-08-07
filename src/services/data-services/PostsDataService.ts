import {httpsClient} from './axiosConfig';

export class PostsDataService {
  public static async fetchPosts() {
    const response = await httpsClient.get('https://my-json-server.typicode.com/typicode/demo/posts');
    return response.data;
  }
}
