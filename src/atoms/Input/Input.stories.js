import Input from "./Input";

export default {
    title: "atoms/Input",
    component: Input,
    tags: ["autodocs"],
    argTypes:{
        backgroundColor: { control: "color" },
        value: {control : "text"},
        placeHolder: {control : "text"}
    }
}

export const Value = {
    args:{
        value: "Example value"
    }
}

export const BackgroundColor = {
    args:{
        backgroundColor: "#0000ff"
    }
}

export const PlaceHolder = {
    args:{
        value:"",
        placeHolder: "example placeholder"
    }
}