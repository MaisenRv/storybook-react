import Input from "./Input";

export default {
    title: "atoms/Input",
    component: Input,
    tags: ["autodocs"],
    argTypes:{
        type: { control: "text" },
        backgroundColor: { control: "color" },
        value: {control : "text"},
        placeHolder: {control : "text"}
    }
}

export const type ={
    args:{
        type:"text",
        value: "Example value",
        onChange: null
    }
}

export const Value = {
    args:{
        type:"text",
        value: "Example value",
        onChange: null
    }
}

export const BackgroundColor = {
    args:{
        type:"text",
        value: "Example value",
        backgroundColor: "#0000ff",
        onChange: null
    }
}

export const PlaceHolder = {
    args:{
        type:"text",
        value:"",
        placeHolder: "example placeholder",
        onChange: null
    }
}