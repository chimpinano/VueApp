import { HTTP } from '../services/Api'

export default {

  register(credentials) {
     HTTP.post('register', credentials);
  }
}
