import styled from "styled-components";

import { color } from "../GlobalStyle";

const layoutWidth = 300;
const buttonWidth = 30;

const SideBarLayout = styled.div`
	display: flex;
	flex-direction: row;
	width: ${layoutWidth}px;
	height: 100%;
	position: fixed;
	top: 0;
	right: 0;
	transition: 1s;
	z-index: 5;

	> div {
		width: ${layoutWidth - buttonWidth}px;
		border-left: 2px solid ${color.dark};
		background-color: ${color.superLight};
	}
	> button {
		width: ${buttonWidth}px;
		height: 150px;
		align-self: center;
		box-shadow: 0 0 15px 0 ${color.normal};
		border-radius: 30px 0 0 30px;
		background-color: white;
	}
	&.show{
		right: 0;
	}
	&.hide{
		right: -${layoutWidth - buttonWidth}px;
	}
`;

export default SideBarLayout;
