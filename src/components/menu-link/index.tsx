import Link from "next/link";
import { MenuLinkContainer } from "./styles";

export type MenuLinkProps = {
	children: React.ReactNode;
	link: string;
	newTab?: boolean;
};

export const MenuLink = ({ children, link, newTab = false }: MenuLinkProps) => {
	const target = newTab ? "_blank" : "_self";
	const nextLink = link.match(/^\//) ? true : false;

	if (nextLink) {
		return (
			<Link href={link} passHref>
				<MenuLinkContainer target={target}>
					{children}
				</MenuLinkContainer>
			</Link>
		);
	}

	return (
		<MenuLinkContainer href={link} target={target}>
			{children}
		</MenuLinkContainer>
	);
};
