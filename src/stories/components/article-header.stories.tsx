import { Meta, StoryObj } from "@storybook/react";
import { ArticleHeader } from "../../components/article-header";
import { articleHeaderContentMock } from "../../mock/article-header-content-mock";

export default {
	title: "ArticleHeader",
	component: ArticleHeader,
} as Meta<typeof ArticleHeader>;

type Story = StoryObj<typeof ArticleHeader>;

export const Template: Story = {
	args: articleHeaderContentMock,
	render: (args) => (
		<div>
			<ArticleHeader {...args} />
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
				laborum tempore repellendus neque est sequi quam inventore
				voluptate reprehenderit, tenetur ut, molestias sunt aut
				doloribus dolorum molestiae enim? Eligendi, molestiae!
			</p>
		</div>
	),
};
