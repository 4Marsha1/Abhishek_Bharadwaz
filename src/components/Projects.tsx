import React, { FunctionComponent, ReactElement } from "react";

export const Projects: FunctionComponent = (): ReactElement => {
	return (
		<div className="flex flex-col gap-8 font-satoshi px-40">
			<div className="h-[100px]" id="projects"></div>
			<span className="text-gray-700 tracking-wide font-bold text-5xl">
				Projects
			</span>
			<div className="w-full h-[400px] bg-black text-orange flex justify-center items-center font-bold text-4xl leading-10 tracking-widest">
				coming soon!
			</div>
		</div>
	);
};
