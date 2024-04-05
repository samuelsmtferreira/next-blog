import { MenuLink } from "../../components/menu";
import { StrapiImage } from "./strapi-image";

export type StrapiSettings = {
	data: {
		id: string;
		attributes: {
			blogName: string;
			blogDescription: string;
			logo: StrapiImage;
			menuLink: MenuLink[];
			text: string;
		};
	};
};
