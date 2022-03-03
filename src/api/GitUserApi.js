import axios from './axios'

function getGitUsersApi(id) {
  return axios.get(`/search/users`, {
    params: {
      q: id,
      per_page: 10,
      page: 1,
    },
  })
}
export { getGitUsersApi }
