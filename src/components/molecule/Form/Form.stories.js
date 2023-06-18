import Form from "./Form";

export default {
  title: "molecule/Form",
  component: Form,
  tags: ["autodocs"],
  argTypes: {
    inputBgColor: { control: "color" },
    buttonBgColor: { control: "color" },
    buttonTextColor: { control: "color" },
  },
};

export const backgroundColor = {
  args: {
    inputType: "text",
    buttonText: "Button",
    buttonBgColor: "#0030ff",
  },
};
