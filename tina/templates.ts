import type { TinaField } from "tinacms";
export function homepagecontentFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "number",
      name: "weight",
      label: "weight",
    },
    {
      type: "boolean",
      name: "header_menu",
      label: "header_menu",
    },
  ] as TinaField[];
}
