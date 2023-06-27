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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProjects from "./components/AllProjects";
import { ToastStateProvider } from "./utils";

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
			<ToastStateProvider>
				<Navbar isMobile={isMobile} />
				<BrowserRouter>
					<Routes>
						<Route
							path="/"
							element={
								<>
									<SpeedDialMenu />
									<Landing />
									<Experiences isMobile={isMobile} />
									<Skills isMobile={isMobile} />
									<Projects isMobile={isMobile} />
									<Connect isMobile={isMobile} />
								</>
							}
						/>

						<Route
							path="/projects"
							element={
								<>
									<AllProjects />
								</>
							}
						/>
					</Routes>
				</BrowserRouter>
				<Footer />
			</ToastStateProvider>
		</div>
	);
};
