import { Meta, StoryObj } from "@storybook/react";
import { PostTemplate } from "../../templates/post-template";
import { postTemplateContentMock } from "../../mock/post-template-content-mock";

export default {
	title: "PostTemplate",
	component: PostTemplate,
} as Meta<typeof PostTemplate>;

type Story = StoryObj<typeof PostTemplate>;

export const Template: Story = {
	args: postTemplateContentMock,
	parameters: {
		layout: "fullscreen",
	},
	render: (args) => <PostTemplate {...args} />,
};
