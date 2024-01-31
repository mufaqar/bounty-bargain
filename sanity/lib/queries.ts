export const QCategories = `*[ _type == "category"] | order(_createdAt desc){
     _id,
     name,
     slug,
     _createdAt,
     _updatedAt
}`;

export const QStore = `*[ _type == "store" && slug.current == $name][0]{
     name,
     slug,
     logo{
          asset->{
               url
          }
     },
     info,
     detail,
     grandRating,
     user->{
          fname,
          lname
     },
     metaTitle,
     metaDescription,
     faqs[]{
          question,
          answer
     }
}`;

export const QQoupons = `*[ _type == "coupon"] | order(_createdAt desc){
     _id,
     name,
     logo,
     _createdAt,
     _updatedAt,
     discount,
     info,
     totalUsed,
     successRate,
     websiteURL,
     couponCode,
     store->{
          name,
          slug,
          logo{
               asset->{
                    url
               }
          },
     },
     category->{
          name,
          slug,
     }
}`;
