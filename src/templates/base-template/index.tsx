"use client";
import { useSearchParams } from "next/navigation";
import { Footer } from "../../components/footer";
import { GoTop } from "../../components/go-top";
import { Header } from "../../components/header";
import { Menu } from "../../components/menu";
import { StrapiSettings } from "../../types/strapi/strapi-settings";
import {
	BaseTemplateContainer,
	BaseTemplateContent,
	BaseTemplateFooter,
	BaseTemplateHeader,
	BaseTemplateSearchContainer,
	SearchInput,
} from "./styles";
import { ToggleTheme } from "@/components/toggle-theme";

export type BaseTemplateProps = {
	settings: StrapiSettings;
	children: React.ReactNode;
};

export const BaseTemplate = ({ settings, children }: BaseTemplateProps) => {
	const searchParams = useSearchParams();
	const searchQuery = searchParams.get("q") || "";

	return (
		<BaseTemplateContainer>
			<ToggleTheme />

			<Menu
				links={settings.data.attributes.menuLink}
				blogName={settings.data.attributes.blogName}
				logo={settings.data.attributes.logo.data.attributes.url}
			/>

			<BaseTemplateHeader>
				<Header
					blogName={settings.data.attributes.blogName}
					blogDescription={settings.data.attributes.blogDescription}
					logo={settings.data.attributes.logo.data.attributes.url}
				/>
			</BaseTemplateHeader>

			<BaseTemplateSearchContainer>
				<form action="/search/" method="GET">
					<SearchInput
						type="search"
						placeholder="Encontre posts"
						name="q"
						defaultValue={searchQuery}
					/>
				</form>
			</BaseTemplateSearchContainer>

			<BaseTemplateContent>{children}</BaseTemplateContent>

			<BaseTemplateFooter>
				<Footer footerHtml={settings.data.attributes.text} />
			</BaseTemplateFooter>

			<GoTop />
		</BaseTemplateContainer>
	);
};
