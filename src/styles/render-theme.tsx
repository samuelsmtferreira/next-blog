import { render } from "@testing-library/react";
import { BlogThemeProvider } from "@/contexts/blog-theme-context";

export const renderTheme = (children: React.ReactNode) => {
	return render(<BlogThemeProvider>{children}</BlogThemeProvider>);
};
