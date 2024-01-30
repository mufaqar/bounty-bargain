import { type SchemaTypeDefinition } from 'sanity'
import { users } from './schema/user'
import { store } from './schema/stores'
import { coupon } from './schema/coupon'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [users, store, coupon],
}
