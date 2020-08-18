import { nanoid } from 'nanoid'
import UserModel from '../Model/UserModel'

export default {
  Query: {
    user: () => ({
      id: nanoid(),
      name: 'hello zhou',
      age: 12,
    }),
    userList: () => UserModel.getList(),
  },
  Mutation: {
    createUser: (parent, args) => {
      const user = new UserModel({
        name: args.name,
        age: args.age,
      })
      user.create()
      return user
    },
  },
}
