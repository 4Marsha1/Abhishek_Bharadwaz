import React, {
	FunctionComponent,
	ReactElement,
	useEffect,
	useState,
} from "react";
import { Navbar } from "./components/Navbar";
import { SpeedDialMenu } from "./components/SpeedDial";
import { Landing } from "./components/Landing";
import { Experiences } from "./components/Experiences";
import { Projects } from "./components/Projects";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

export const App: FunctionComponent = (): ReactElement => {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		if (window.innerWidth <= 768) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, []);
	return (
		<div className="flex flex-col bg-lightGrey">
			<Navbar isMobile={isMobile} />
			<SpeedDialMenu />
			<Landing />
			<Experiences isMobile={isMobile} />
			<Skills isMobile={isMobile} />
			<Projects isMobile={isMobile} />
			<Connect isMobile={isMobile} />
			<Footer />
		</div>
	);
};
