import { create, insert, search, remove } from '@nearform/lyra'

const db = create({
  schema: {
    author: 'string',
    quote: 'string'
  }
})

export default ([term, properties = '*']) => search(db, { term, properties })
