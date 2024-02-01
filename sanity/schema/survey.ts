import { defineType, defineField } from "sanity";

export const survey = defineType({
  name: "survey",
  type: "document",
  title: "Survey",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "thumbnail",
      type: "image",
      title: "Thumbnail",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
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
      name: "types_of_rewards",
      title: "Types of rewards",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Cash", value: "cash" },
          { title: "Gift card", value: "gift_card" },
          { title: "Other incentives", value: "other_incentives" },
        ],
      },
    }),
  ],
});
