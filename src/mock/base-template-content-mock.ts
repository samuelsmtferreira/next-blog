import { BaseTemplateProps } from "../templates/base-template";
import { data } from "./data.json";

export const baseTemplateContentMock = {
	settings: data.setting,
	children: "Olá mundo",
} as BaseTemplateProps;
