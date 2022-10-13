import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputText from "./InputText";

export default {
  title: "Atom/Input",
  component: InputText,
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => (
  <InputText {...args} />
);

export const InputDisable = Template.bind({});
InputDisable.args = {
  label: "Nama",
  type: "text",
  disabled: true,
};

export const Password = Template.bind({});
Password.args = {
  label: "Password",
  type: "password",
  error: true,
  errorMessage: "Tidak Boleh Kosong",
};

export const Number = Template.bind({});
Number.args = {
  label: "No HP",
  type: "number",
  error: true,
  errorMessage: "Tidak Boleh Kosong",
};
