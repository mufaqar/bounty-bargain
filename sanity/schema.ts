import { type SchemaTypeDefinition } from 'sanity'
import { users } from './schema/user'
import { store } from './schema/store'
import { coupon } from './schema/coupon'
import { category } from './schema/category'
import { survey } from './schema/survey'
import { blogs } from './schema/blogs'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [users, store, coupon, category, survey, blogs],
}
