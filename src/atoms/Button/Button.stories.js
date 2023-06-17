import Button from "./Button";

export default {
  title: "atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
  },
};

export const BackgroundColor = {
  args: {
    label: "Button",
    backgroundColor: "#00ff00",
  },
};

export const Color = {
  args: {
    label: "Button",
    color: "#ff0000",
  },
};
