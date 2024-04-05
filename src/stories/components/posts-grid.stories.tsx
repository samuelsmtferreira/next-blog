import { Meta, StoryObj } from "@storybook/react";
import { PostsGrid } from "../../components/posts-grid";
import { postsGridContentMock } from "../../mock/posts-grid-content-mock";

export default {
	title: "PostsGrid",
	component: PostsGrid,
} as Meta<typeof PostsGrid>;

type Story = StoryObj<typeof PostsGrid>;

export const Template: Story = {
	args: postsGridContentMock,
	parameters: {
		layout: "fullscreen",
	},
	render: (args) => <PostsGrid {...args} />,
};

export const NoPosts: Story = {
	parameters: {
		layout: "fullscreen",
	},
	render: () => <PostsGrid />,
};
