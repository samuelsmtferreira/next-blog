import { GoTopContainer } from "./styles";
import { KeyboardArrowUp } from "@styled-icons/material-outlined/KeyboardArrowUp";

export const GoTop = () => {
	return (
		<GoTopContainer href="#" aria-label="Go to top" title="Go to top">
			<KeyboardArrowUp />
		</GoTopContainer>
	);
};
