// import { createClient } from 'next-sanity'

import { createClient } from '@sanity/client'
import { apiVersion, dataset, projectId, useCdn, token } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token,
})
