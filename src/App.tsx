import React, { FunctionComponent, ReactElement } from "react";
import { Navbar } from "./components/Navbar";
import { SpeedDialMenu } from "./components/SpeedDial";
import { Landing } from "./components/Landing";
import { Experiences } from "./components/Experiences";
import { Projects } from "./components/Projects";

export const App: FunctionComponent = (): ReactElement => {
	return (
		<div className="flex flex-col  bg-lightGrey">
			<Navbar />
			<SpeedDialMenu />
			<Landing />
			<Experiences />
			<Projects />
		</div>
	);
};
