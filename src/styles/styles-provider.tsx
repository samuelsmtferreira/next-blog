"use client";
import StyledComponentsRegistry from "../lib/registry";
import { GlobalStyles } from "./global-styles";
import React from "react";
import { BlogThemeProvider } from "@/contexts/blog-theme-context";

export function StylesProvider({ children }: React.PropsWithChildren) {
	return (
		<StyledComponentsRegistry>
			<BlogThemeProvider>
				<GlobalStyles />
				{children}
			</BlogThemeProvider>
		</StyledComponentsRegistry>
	);
}
