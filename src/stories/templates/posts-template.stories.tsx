import { Meta, StoryObj } from "@storybook/react";
import { PostsTemplate } from "../../templates/posts-template";
import { postsTemplateContentMock } from "../../mock/posts-template-content-mock";

export default {
	title: "PostsTemplate",
	component: PostsTemplate,
} as Meta<typeof PostsTemplate>;

type Story = StoryObj<typeof PostsTemplate>;

export const Template: Story = {
	args: postsTemplateContentMock,
	parameters: {
		layout: "fullscreen",
	},
	render: (args) => <PostsTemplate {...args} />,
};
