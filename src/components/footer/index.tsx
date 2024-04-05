import { FooterContainer } from "./styles";
import { HtmlComponent } from "../html-component";

export type FooterProps = {
	footerHtml: string;
};

export const Footer = ({ footerHtml }: FooterProps) => {
	return (
		<FooterContainer>
			<HtmlComponent html={footerHtml} />
		</FooterContainer>
	);
};
