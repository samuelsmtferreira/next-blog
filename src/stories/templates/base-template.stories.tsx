import { Meta, StoryObj } from "@storybook/react";
import { BaseTemplate } from "../../templates/base-template";
import { baseTemplateContentMock } from "../../mock/base-template-content-mock";

export default {
	title: "BaseTemplate",
	component: BaseTemplate,
} as Meta<typeof BaseTemplate>;

type Story = StoryObj<typeof BaseTemplate>;

export const Template: Story = {
	args: baseTemplateContentMock,
	parameters: {
		layout: "fullscreen",
	},
	render: (args) => <BaseTemplate {...args} />,
};
