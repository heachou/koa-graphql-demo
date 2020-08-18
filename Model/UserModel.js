import { nanoid } from 'nanoid'
import db from '../db'

export default class UserModel {
  constructor({ name, age }) {
    this.id = nanoid()
    this.name = name
    this.age = age
  }
  static getList(){
    const data = db.getData()
    const users = data['users']
    console.log(users)
    return users
  }
  create() {
    const data = db.getData()
    const users = data['users']
    const user = {
      id: this.id,
      name: this.name,
      age: this.age,
    }
    users.push(user)
    db.setData('users', users)
    return user
  }
}
