import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputText from "./InputText";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atom/Input",
  component: InputText,
} as ComponentMeta<typeof InputText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputText> = (args) => (
  <InputText {...args} />
);

export const InputDisable = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InputDisable.args = {
  label: "Nama",
  type: "text",
};

export const Password = Template.bind({});
Password.args = {
  label: "Password",
  type: "password",
};
