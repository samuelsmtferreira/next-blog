"use client";
import { HtmlComponentContainer } from "./styles";

export type HtmlComponentProps = {
	html: string;
};

export const HtmlComponent = ({ html }: HtmlComponentProps) => {
	return (
		<HtmlComponentContainer dangerouslySetInnerHTML={{ __html: html }} />
	);
};
