import React, { FunctionComponent, ReactElement } from "react";
import { SkillsData } from "../Data/SkillsData";

type TProps = {
	isMobile: boolean;
};

const Skills: FunctionComponent<TProps> = ({ isMobile }): ReactElement => {
	return (
		<div className="flex flex-col gap-8 font-satoshi px-6 md:px-40">
			<div className="h-[100px]" id="skills"></div>
			<span className="text-gray-700 tracking-wide font-bold text-3xl md:text-5xl">
				Skills
			</span>
			<div className="flex flex-wrap justify-center items-center gap-4">
				{SkillsData.map((skill) => (
					<img
						src={skill.url}
						alt=""
						key={skill.id}
						width={isMobile ? "60px" : "100px"}
						className="shadow-lg shadow-slate-400 p-1 md:p-4"
					/>
				))}
			</div>
		</div>
	);
};

export default Skills;
