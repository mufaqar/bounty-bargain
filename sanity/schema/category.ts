import { AiFillDatabase } from "react-icons/ai";
import { TbSeo } from "react-icons/tb";
import { defineType, defineField } from "sanity";

export const category = defineType({
  name: "category",
  type: "document",
  title: "Category",
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
      title: "Slug",
      name: "slug",
      type: "slug",
      group: "main",
      options: {
        source: "name",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    }),
    {
      name: "content",
      title: "Content",
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
    },
    defineField({
      name: "metatitle",
      type: "string",
      title: "Meta Title",
      group: "seo",
    }),
    defineField({
      name: "metadescription",
      type: "text",
      title: "Meta Description",
      group: "seo",
    }),
    defineField({
      name: "metaKeywords",
      description: 'please seprate keyword with "," eg:( keyword1, keyword2, ... ) ',
      type: "text",
      title: "Meta Keywords",
      group: "seo",
    }),
  ],
});
