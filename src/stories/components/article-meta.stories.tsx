import { Meta, StoryObj } from "@storybook/react";
import { ArticleMeta } from "../../components/article-meta";
import { articleMetaContentMock } from "../../mock/article-meta-content-mock";

export default {
	title: "ArticleMeta",
	component: ArticleMeta,
} as Meta<typeof ArticleMeta>;

type Story = StoryObj<typeof ArticleMeta>;

export const Template: Story = {
	args: articleMetaContentMock,
	render: (args) => <ArticleMeta {...args} />,
};

export const NoAuthor: Story = {
	args: articleMetaContentMock,
	render: (args) => <ArticleMeta {...args} author={undefined} />,
};

export const NoCategories: Story = {
	args: articleMetaContentMock,
	render: (args) => <ArticleMeta {...args} categories={[]} />,
};

export const NoAuthorAndCategories: Story = {
	args: articleMetaContentMock,
	render: (args) => (
		<ArticleMeta {...args} author={undefined} categories={[]} />
	),
};
