import React, { FunctionComponent, ReactElement } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Avatar } from "@mui/material";
import { ExperienceData } from "../Data/ExperienceData";

type TProps = {
	isMobile: boolean;
};

export const Experiences: FunctionComponent<TProps> = ({
	isMobile,
}): ReactElement => {
	return (
		<div className="flex flex-col gap-8 font-satoshi px-6 md:px-40">
			<div className="h-[100px]" id="experiences"></div>
			<span className="text-gray-700 tracking-wide font-bold text-3xl md:text-5xl">
				Experiences
			</span>
			<div className="flex justify-start z-2">
				<Timeline position="alternate">
					{isMobile ? (
						<div className="flex flex-col gap-4">
							{ExperienceData.map((item) => (
								<div className="flex flex-col hover:bg-white transition ease-in delay-50 bg-[#eceff1] px-4 py-4 border border-[#ece7e7] rounded-2xl shadow-xl shadow-slate-300">
									<div className="flex justify-between items-end">
										<span className="text-lg font-semibold text-gray-800 tracking-wider text-left">
											{item.title}
										</span>
										<img
											src={item.logo}
											alt="logo"
											className="w-[40px] rounded-full shadow-lg"
										/>
									</div>
									<span className="text-base font-semibold text-gray-900 mb-2 tracking-wide text-left">
										<span className="text-orange">{item.company}</span> ·{" "}
										{item.employment}
									</span>
									<span className="text-sm font-medium text-blue-600 text-left">
										{item.location} · {item.type}
									</span>
									<span className="text-xs font-open text-gray-700 my-4 text-left leading-6">
										{item.description}
									</span>
									<div className="flex flex-wrap gap-4">
										{item.skills.split(",").map((skill) => (
											<span className="bg-slate-500 text-gray-100 px-2 py-1 rounded-lg text-xs shadow-lg shadow-gray-500">
												{skill}
											</span>
										))}
									</div>
								</div>
							))}
						</div>
					) : (
						ExperienceData.map((item) => (
							<TimelineItem key={item.id}>
								<TimelineOppositeContent sx={{ m: "auto 0" }}>
									<span className="text-base text-gray-500 font-semibold">
										{item.date} · {item.duration}
									</span>
								</TimelineOppositeContent>
								<TimelineSeparator>
									<TimelineConnector />
									<TimelineDot
										sx={{ padding: 0 }}
										className="cursor-pointer transition ease-in-out delay-150 transform  
                                    hover:scale-125 motion-reduce:transition-none motion-reduce:hover:transform-none"
									>
										<Avatar src={item.logo} />
									</TimelineDot>
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent
									sx={{ py: "12px", px: 2 }}
									className="cursor-pointer transition ease-in delay-50 transform hover:-translate-y-2 
                                hover:scale-105 motion-reduce:transition-none motion-reduce:hover:transform-none"
								>
									<div className="flex flex-col hover:bg-white transition ease-in delay-50 bg-[#eceff1] px-4 py-4 border border-[#ece7e7] rounded-2xl shadow-xl shadow-slate-300">
										<span className="text-lg font-semibold text-gray-800 tracking-wider text-left">
											{item.title}
										</span>
										<span className="text-base font-semibold text-gray-900 mb-2 tracking-wide text-left">
											<span className="text-orange">{item.company}</span> ·{" "}
											{item.employment}
										</span>
										<span className="text-base font-medium text-blue-600 text-left">
											{item.location} · {item.type}
										</span>
										<span className="text-sm font-open text-gray-700 my-4 text-left leading-6">
											{item.description}
										</span>
										<div className="flex flex-wrap gap-2">
											{item.skills.split(",").map((skill) => (
												<span className="bg-slate-500 text-gray-100 px-2 py-1 rounded-lg text-xs shadow-lg shadow-gray-500">
													{skill}
												</span>
											))}
										</div>
									</div>
								</TimelineContent>
							</TimelineItem>
						))
					)}
				</Timeline>
			</div>
		</div>
	);
};
