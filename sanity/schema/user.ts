import { defineType, defineField } from "sanity";

export const users = defineType({
  name: "users",
  type: "document",
  title: "Users",
  fields: [
    defineField({
      name: "fname",
      type: "string",
      title: "First Name",
    }),
    defineField({
      name: "profile_image",
      type: "image",
      title: "Profile Image",
    }),
    // defineField({
    //   name: "lname",
    //   type: "string",
    //   title: "Last Name",
    // }),
    // defineField({
    //   name: "gender",
    //   type: "string",
    //   title: "Gender",
    // }),
    // defineField({
    //   name: "dateofbirth",
    //   type: "string",
    //   title: "Date Of Birth",
    // }),
    // defineField({
    //   name: "email",
    //   type: "string",
    //   title: "Email",
    // }),
    // defineField({
    //   name: "password",
    //   type: "string",
    //   title: "Password",
    //   readOnly: true,
    // }),
    // defineField({
    //   title: 'Selected Survey',
    //   name: 'survey',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'reference',
    //       to: [
    //         {type: 'survey'},
    //       ]
    //     }
    //   ]
    // })
  ],
});
