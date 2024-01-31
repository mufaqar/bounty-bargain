export const QCategories = `*[ _type == "category"] | order(_createdAt desc){
     _id,
     name,
     slug,
     _createdAt,
     _updatedAt
}`