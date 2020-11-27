import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import SideBarTab from "../../src/presentationals/SideBarTab";

describe("<SideBarTab />", () => {
	it("renders tab menu", () => {
		const onClick = () => () => {};
		const { container } = render(<SideBarTab onClick={onClick}/>);
		const tabMenus = container.querySelectorAll("button");

		expect(tabMenus).toHaveLength(3);
	});
});