import { create, insert, search, remove } from '@nearform/lyra'

const db = create({
  schema: {
    author: 'string',
    quote: 'string'
  }
})

export default {
  search: ([term, properties = '*']) => search(db, { term, properties }),
  insert: ([obj], ctx) => insert(db, { ...obj, createdBy: ctx.user.email }),
}
