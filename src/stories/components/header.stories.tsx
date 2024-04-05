import { Meta, StoryObj } from "@storybook/react";
import { Header } from "../../components/header";
import { headerContentMock } from "../../mock/header-content-mock";

export default {
	title: "Header",
	component: Header,
} as Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

export const Template: Story = {
	args: headerContentMock,
	render: (args) => <Header {...args} />,
};
