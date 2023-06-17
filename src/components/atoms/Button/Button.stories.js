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
    children: "Button",
    backgroundColor: "#00ff00",
  },
};

export const Color = {
  args: {
    children: "Button",
    color: "#ff0000",
  },
};
