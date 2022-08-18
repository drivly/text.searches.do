import { create, insert, search, remove } from '@nearform/lyra'

const db = create({
  schema: {
    author: 'string',
    quote: 'string'
  }
})

export default term => search(db, { term, properties: '*' })
