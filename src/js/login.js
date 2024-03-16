export default class Validator {
  constructor(username){
    this.username = username;
  }
  validateUsername(){
    return /^[a-z]\d{0,3}[a-z]$/g.test(this.username)
  }
}
