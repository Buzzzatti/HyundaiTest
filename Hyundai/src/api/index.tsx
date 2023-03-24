import {BASE_DEV_URL, GIT_TOKEN} from '@env';
import axios from 'axios';
// import {Octokit} from 'octokit';

// export const defaultApi = new Octokit({
//   baseUrl: BASE_DEV_URL,
//   auth: GIT_TOKEN,
// });
// await octokit.request('GET /events', {
//   headers: {
//     'X-GitHub-Api-Version': '2022-11-28'
//   }
// })

export const defaultApi = axios.create({
  baseURL: 'https://api.github.com/users/tater',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
    Authorization: GIT_TOKEN,
    // 'Content-Type': 'application/json',
  },
});
