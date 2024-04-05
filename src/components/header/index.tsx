import { Heading } from "../heading";
import { LogoLink } from "../logo-link";
import { HeaderContainer, HeaderContentContainer } from "./styles";

export type HeaderProps = {
	blogName: string;
	blogDescription: string;
	logo: string;
	showText?: boolean;
};

export const Header = ({
	blogName,
	blogDescription,
	logo,
	showText = true,
}: HeaderProps) => {
	return (
		<HeaderContainer>
			<LogoLink
				link="/"
				srcImg={logo}
				text={`${blogName} - ${blogDescription}`}
			/>

			{showText && (
				<HeaderContentContainer>
					<Heading size="small" as="h2" colorDark={true}>
						{blogName}
					</Heading>
					<p>{blogDescription}</p>
				</HeaderContentContainer>
			)}
		</HeaderContainer>
	);
};
