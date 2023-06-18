import Input from "./Input";

export default {
  title: "atoms/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const type = {
  args: {
    type: "text",
  },
};

export const Value = {
  args: {
    type: "text",
    value: "Example value",
  },
};

export const BackgroundColor = {
  args: {
    type: "text",
    value: "Example value",
    backgroundColor: "#0000ff",
  },
};

export const PlaceHolder = {
  args: {
    type: "text",
    value: "",
    placeHolder: "example placeholder",
  },
};
