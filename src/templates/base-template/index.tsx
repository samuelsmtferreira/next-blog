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
import { Suspense } from "react";

export type BaseTemplateProps = {
	settings: StrapiSettings;
	children: React.ReactNode;
};

const SearchForm = () => {
	const searchParams = useSearchParams();
	const searchQuery = searchParams.get("q") || "";

	return (
		<form action="/search/" method="GET">
			<SearchInput
				type="search"
				placeholder="Encontre posts"
				name="q"
				defaultValue={searchQuery}
			/>
		</form>
	);
};

export const BaseTemplate = ({ settings, children }: BaseTemplateProps) => {
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
				<Suspense>
					<SearchForm />
				</Suspense>
			</BaseTemplateSearchContainer>

			<BaseTemplateContent>{children}</BaseTemplateContent>

			<BaseTemplateFooter>
				<Footer footerHtml={settings.data.attributes.text} />
			</BaseTemplateFooter>

			<GoTop />
		</BaseTemplateContainer>
	);
};
