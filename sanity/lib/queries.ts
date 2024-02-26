export const QCategories = `*[ _type == "category"] | order(_createdAt desc){
     _id,
     name,
     slug,
     _createdAt,
     _updatedAt
}`;

export const QSingleCategories = `*[ _type == "category" && slug.current == $name][0] {
     _id,
     name,
     slug,
     content,
     _createdAt,
     _updatedAt,
     metatitle,
     metadescription,
     metaKeywords
}`;


export const QBlogs = `*[ _type == "blogs"] | order(_createdAt desc){
     _id,
     title,
     slug,
     _createdAt,
     _updatedAt,
     excerpt,
     content,
     writtenby->{
          fname,
          profile_image{
               asset->{
                    url
               }
          }          
     },
     image{
          asset->{
               url
          }
     },
     metatitle,
     metadescription,
     metaKeywords
}`;

export const QSingleBlogs = `*[ _type == "blogs" && slug.current == $slug ] | order(_createdAt desc)[0]{
     _id,
     title,
     slug,
     _createdAt,
     _updatedAt,
     excerpt,
     content,
     writtenby->{
          fname,
          lname
     },
     image{
          asset->{
               url
          }
     },
     metatitle,
     metadescription,
     metaKeywords
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
     _id,
     _type,
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
     category->{
          name,
          slug,
     },
     country->{
          name,
          slug,
     },
     similarStore[]->{
          name,
          slug,
     },
     faqs[]{
          question,
          answer
     }
}`;

export const QStores = `*[ _type == "store"] | order(_createdAt desc){
     name,
     slug,
     _type,
     _id,
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
     category->{
          name,
          slug,
     },
     metaTitle,
     metaDescription,
     faqs[]{
          question,
          answer
     }
}`;

export const QQoupons = `*[ _type == "coupon" && isverified == true] | order(_createdAt desc){
     _id,
     name,
     _type,
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
     offer_type,
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


export const QQouponsByCategories = `*[ _type == "coupon" && category._ref in *[_type=="category" && slug.current == $name]._id && isverified == true] | order(_createdAt desc){
     _id,
     name,
     _type,
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


export const QQouponsByStore = `*[ _type == "coupon" && store._ref in *[_type=="store" && slug.current == $name]._id && isverified == true] | order(_createdAt desc){
     _id,
     name,
     _type,
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


