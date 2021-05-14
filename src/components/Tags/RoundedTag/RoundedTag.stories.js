import RoundedTag from ".";

export default {
    title: "Tags/RoundedTag",
    argTypes: {
        value: {
            defaultValue: "Text",
            control: {
                type: "text",
            },
        },
        border: {
            defaultValue: "#fff",
            control: {
                type: "color",
            },
        },
        color: {
            defaultValue: "#fff",
            control: {
                type: "color",
            },
        },
        backgroundColor: {
            defaultValue: "#0a192f",
            control: {
                type: "color",
            },
        },
        width: {
            control: {
                type: "text",
            },
        },
        height: {
            control: {
                type: "text",
            },
        },
    },
};

const Template = (args) => <RoundedTag {...args} />;

export const Basic = Template.bind({});
