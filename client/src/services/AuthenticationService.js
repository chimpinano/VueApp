import { HTTP } from '../services/Api'

export default {

  register(credentials) {
   return HTTP.post('register', credentials);
  }
}
