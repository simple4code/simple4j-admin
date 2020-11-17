import { getToken } from '@/utils/auth'
import { login, logout, getInfo } from '@/api/user'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: []
}
const actions = {
  // user login
  login({ commit }, userInfo) {
    console.log(commit);
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        console.log(data);
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }


}

export default {
  namespaced: true,
  state,
  actions
}
