import { defineType, defineField } from "sanity";

export const coupon = defineType({
  name: "coupon",
  type: "document",
  title: "Coupon",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
    }),
    defineField({
      name: "logo",
      type: "image",
      title: "Logo",
    }),
    defineField({
      name: "discount",
      description: 'add discount eg: 20',
      type: "number",
      title: "Discount",
    }),
    defineField({
      name: "info",
      type: "text",
      title: "Info",
    }),
    defineField({
      name: "totalUsed",
      type: "number",
      title: "Total Used",
    }),
    defineField({
      name: "successRate",
      type: "number",
      title: "Success Rate",
    }),
    defineField({
      name: "websiteURL",
      type: "string",
      title: "Website URL",
    }),
    defineField({
      name: "couponCode",
      type: "string",
      title: "Coupon Code",
    }),
    defineField({
      title: "Store",
      name: "store",
      type: "reference",
      to: [{ type: "store" }],
    }),
  ],
});
