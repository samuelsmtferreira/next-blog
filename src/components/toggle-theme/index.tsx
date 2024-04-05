import { useContext, useEffect, useState } from "react";
import { BlogThemeContext } from "../../contexts/blog-theme-context";
import { Input, Label, Slider, Wrapper } from "./styles";

export const ToggleTheme = () => {
	const { setTheme } = useContext(BlogThemeContext);
	const [checked, setChecked] = useState(false);

	useEffect(() => {
		const localTheme = localStorage.getItem("theme");
		if (!localTheme) return;
		const newTheme = JSON.parse(localTheme);

		if (newTheme.name === "inverted") {
			setChecked(true);
		}
	}, []);

	useEffect(() => {
		setTheme && setTheme(checked ? "inverted" : "default");
	}, [checked, setTheme]);

	const handleChange = () => {
		setChecked((s) => !s);
		setTheme && setTheme(checked ? "inverted" : "default");
	};

	return (
		<Wrapper>
			<Label>
				Toggle light and dark modes
				<Input
					type="checkbox"
					value="Dark mode active"
					onChange={handleChange}
					checked={checked}
				/>
				<Slider></Slider>
			</Label>
		</Wrapper>
	);
};
