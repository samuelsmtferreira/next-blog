import { Meta, StoryObj } from "@storybook/react";
import { HtmlComponent } from "../../components/html-component";
import { htmlContentMock } from "../../mock/html-content-mock";

export default {
	title: "HtmlComponent",
	component: HtmlComponent,
} as Meta<typeof HtmlComponent>;

type Story = StoryObj<typeof HtmlComponent>;

export const Template: Story = {
	args: {
		html: htmlContentMock,
	},
	render: (args) => <HtmlComponent {...args} />,
};
