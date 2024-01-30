import { type SchemaTypeDefinition } from 'sanity'
import { users } from './schema/user'
import { store } from './schema/stores'
import { coupon } from './schema/coupon'
import { category } from './schema/category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [users, store, coupon, category],
}
