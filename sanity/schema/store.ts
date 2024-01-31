import { AiFillDatabase } from "react-icons/ai";
import { defineType, defineField } from "sanity";
import { TbSeo } from "react-icons/tb";

export const store = defineType({
  name: "store",
  type: "document",
  title: "Store",
  groups: [
    {
      title: "Main",
      name: "main",
      icon: AiFillDatabase,
      default: true,
    },
    {
      title: "SEO",
      name: "seo",
      icon: TbSeo,
    },
  ],
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
      group: "main",
    }),
    defineField({
      name: "logo",
      type: "image",
      title: "Logo",
      group: "main",
    }),
    defineField({
      name: "info",
      type: "text",
      title: "Info",
      group: "main",
    }),
    defineField({
      name: "detail",
      title: "Detail",
      type: "array",
      group: "main",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Alternative text",
              description: `Some of your visitors cannot see images, 
			  be they blind, color-blind, low-sighted; 
			  alternative text is of great help for those 
			  people that can rely on it to have a good idea of 
			  what\'s on your page.`,
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    }),
    defineField({
      name: "grandRating",
      type: "number",
      title: "Grand Rating",
      group: "main",
    }),
    defineField({
      title: "User",
      name: "user",
      type: "reference",
      to: [{ type: "users" }],
      group: "main",
    }),
    // seo fields
    defineField({
      name: "metaTitle",
      type: "string",
      title: "Meta Title",
      group: "seo",
    }),
    defineField({
      name: "metaDescription",
      type: "string",
      title: "Meta Description",
      group: "seo",
    }),
    defineField({
      title: "Faqs",
      type: "array",
      name: "faqs",
      group: "main",
      of: [
        {
          type: "object",
          name: "faq",
          fields: [
            { type: "string", name: "question" },
            { type: "text", name: "answer" },
          ],
        },
      ],
    }),
  ],
});
