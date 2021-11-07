import { UserInputError } from '@redwoodjs/graphql-server'
import { db } from 'src/lib/db'

const validate = (input) => {
  if (!input.email || !input.email.match(/[^@]+@[^.]+\..+/)) {
    throw new UserInputError('can not create contact', {
      messages: { email: ['email format not valid'] },
    })
  }
}

export const contacts = () => {
  return db.contact.findMany()
}

export const createContact = ({ input }) => {
  // TODO: implement
  validate(input)
  return db.contact.create({ data: input })
}
