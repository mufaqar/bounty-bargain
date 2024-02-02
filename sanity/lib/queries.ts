export const QCategories = `*[ _type == "category"] | order(_createdAt desc){
     _id,
     name,
     slug,
     _createdAt,
     _updatedAt
}`;

export const QSurvey = `*[ _type == "survey"] | order(_createdAt desc){
     _id,
     title,
     thumbnail{
          asset->{
               url
          }
     },
     description,
     types_of_rewards[],
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
     detail_onlick,
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

export const QStores = `*[ _type == "store"] | order(_createdAt desc){
     name,
     slug,
     logo{
          asset->{
               url
          }
     },
     info,
     detail,
     detail_onlick,
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
     logo{
          asset->{
               url
          }
     },
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
     },

}`;


export const QQouponsByCategories = `*[ _type == "coupon" && category._ref in *[_type=="category" && slug.current == $name]._id ] | order(_createdAt desc){
     _id,
     name,
     logo{
          asset->{
               url
          }
     },
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
     },
     category->{
          name,
          slug,
     },
     offer_type[]
}`;


export const QQouponsByStore = `*[ _type == "coupon" && store._ref in *[_type=="store" && slug.current == $name]._id ] | order(_createdAt desc){
     _id,
     name,
     logo{
          asset->{
               url
          }
     },
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
     },
     offer_type[]
}`;