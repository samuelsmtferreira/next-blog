import React from "react";
import type { Preview } from "@storybook/react";
import { GlobalStyles } from "../src/styles/global-styles";
import { BlogThemeProvider } from "../src/contexts/blog-theme-context";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		(Story) => (
			<BlogThemeProvider>
				<GlobalStyles />
				<Story />
			</BlogThemeProvider>
		),
	],
};

export default preview;
