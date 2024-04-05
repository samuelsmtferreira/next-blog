import { Meta, StoryObj } from "@storybook/react";
import { Footer } from "../../components/footer";

export default {
	title: "Footer",
	component: Footer,
} as Meta<typeof Footer>;

type Story = StoryObj<typeof Footer>;

export const Template: Story = {
	args: {
		footerHtml: `<p><a href="https://beacons.page/otaviomiranda">Feito com ❤ por Otávio Miranda</a></p>`,
	},
	render: (args) => <Footer {...args} />,
};
