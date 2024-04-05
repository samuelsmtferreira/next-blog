import { LogoLinkContainer } from "./styles";
import { Heading } from "../heading";
import Link from "next/link";

export type LogoLinkProps = {
	text: string;
	srcImg?: string;
	link: string;
	newTab?: boolean;
};

export const LogoLink = ({
	text,
	srcImg = "",
	link,
	newTab = false,
}: LogoLinkProps) => {
	const nextLink = link.match(/^\//) ? true : false;
	const target = newTab ? "_blank" : "_self";

	if (nextLink) {
		return (
			<Heading size="small" isUppercase>
				<Link href={link} passHref>
					<LogoLinkContainer target={target}>
						{srcImg ? <img src={srcImg} alt={text} /> : text}
					</LogoLinkContainer>
				</Link>
			</Heading>
		);
	}

	return (
		<Heading size="small" isUppercase>
			<LogoLinkContainer href={link} target={target}>
				{!!srcImg && <img src={srcImg} alt={text} />}
				{!srcImg && text}
			</LogoLinkContainer>
		</Heading>
	);
};
