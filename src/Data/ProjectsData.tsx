import doors_oms_1 from "../assets/projects/doors_oms/1.png";
import doors_oms_2 from "../assets/projects/doors_oms/2.png";
import doors_oms_3 from "../assets/projects/doors_oms/3.png";

import ivy_1 from "../assets/projects/ivy/1.png";
import ivy_2 from "../assets/projects/ivy/2.png";
import ivy_3 from "../assets/projects/ivy/3.png";

import edvora from "../assets/projects/all/edvora.jpg";
import budget from "../assets/projects/all/budgets.jpg";
import textToSpeech from "../assets/projects/all/text-to-speech.jpg";
import sorting from "../assets/projects/all/sorting.jpg";
import wiki from "../assets/projects/all/wiki-search.jpg";
import tracker from "../assets/projects/all/tracker.jpg";
import githubWeekly from "../assets/projects/all/github-weekly.jpg";
import vaidya from "../assets/projects/all/vaidya.jpg";
import cuvette from "../assets/projects/all/cuvette.jpg";
import connectPlatform from "../assets/projects/all/connectPlatform.jpg";
import letGoDutch from "../assets/projects/all/letsGoDutch.jpg";
import astra from "../assets/projects/all/astra-dashboard.jpg";

export const ProjectsData = [
	{
		id: 1,
		title: "Doors OMS",
		type: "Freelance",
		images: [doors_oms_1, doors_oms_2, doors_oms_3],
		description: "Built a Doors Order Management System for a UK based client.",
		skills: "ReactJS, Typescript, TailwindCSS",
		difficulty: "3 ⭐️",
		date: "May 2023 - June 2023",
		link: {
			url: "",
			text: "Under NDA - No Live Project",
		},
	},
	{
		id: 2,
		title: "IVY Dashboard",
		type: "Freelance",
		images: [ivy_1, ivy_2, ivy_3],
		description: "Built a Property Management System",
		skills: "ReactJS, Typescript, TailwindCSS",
		difficulty: "5 ⭐️",
		date: "May 2023 - June 2023",
		link: {
			url: "",
			text: "Under NDA - No Live Project",
		},
	},
];

export const allProjects = [
	{
		id: 10,
		title: "ConnectPlatform",
		type: "Personal",
		image: connectPlatform,
		skills: [
			"MongoDB",
			"Mongoose",
			"NodeJs",
			"Express",
			"ReactJS",
			"Redux",
			"CSS",
			"REST API",
		],
		description: [
			"01. Platform for developers, where one can connect and share posts",
			"02. One can register into the platform, make a profile, view others profile, make posts, like and comment on posts.",
			"03. Fully CRUD app. One can create, read, update & delete everything from profiles, posts, comments, dashboard etc ",
		],
		sourceCode: "https://github.com/4Marsha1/ConnectPlatform",
		live: "https://pacific-oasis-57891.herokuapp.com/",
	},
	{
		id: 2,
		title: "Budget Planner",
		type: "Personal",
		image: budget,
		skills: ["ReactJS", "Redux", "CSS", "REST API", "CRUD"],
		description: [
			"01. To provide ease of making budget, adding expenses and keeping track.",
			"02. The app demonstrates CRUD operations.The data is store in the local storage.The data is collected using basic forms.",
			"03. One can make budgets with a name and max amount.One can add expenses with name, amount and category(either one of the budgets or uncategorized).",
		],
		sourceCode: "https://github.com/4Marsha1/BudgetApp",
		live: "https://budget-app-crud.netlify.app/",
	},
	{
		id: 1,
		title: "Edvora",
		type: "Personal",
		image: edvora,
		skills: ["ReactJS", "Redux", "CSS", "REST API"],
		description: [
			"01. To implement React and Redux",
			"02. Data is fetched from an API, the data is then sorted category wise and displayed",
			"03. User can view various products and prices.The filter option enables user to filter by brand name, state, city.Once a product is selected, one can filter the states for that product specifically, and once a state is selected, one can filter by cities of that state too.",
		],
		sourceCode: "https://github.com/4Marsha1/Edvora",
		live: "https://edvora-abhishekbharadwaz.netlify.app/",
	},
	{
		id: 8,
		title: "Vaidya",
		type: "Team",
		image: vaidya,
		skills: ["NodeJS", "Express", "EJS", "MongoDB", "Mongoose"],
		description: [
			"01. A medical-help center web application that will help connecting local hospitals to people.",
			"02. It acts as an information center that will provide a user with all the details they need about the medical outlets nearby.",
			"03. Users can also enter there through the forms and changes will be reflected in the website",
		],
		sourceCode: "https://github.com/SRV1030/Vaidya",
		live: "https://murmuring-ravine-06450.herokuapp.com/",
	},
	{
		id: 4,
		title: "Sorting Visualizer",
		type: "Personal",
		image: sorting,
		skills: ["ReactJS", "CSS"],
		description: [
			"01. To help visualize the various sorting Algorithms",
			"02. Applied the sorting algorithms with extra parameters to help animate the sorting process.",
			"03. A random array can be generated, that is displayed as bar graph. 6 Buttons are available for 6 sorting algorithms: insertion, bubble, selection, merge, quick and count.Each button applies the sorting algorithm and animated the bar graph from unsorted to sorted arrangement",
		],
		sourceCode: "https://github.com/4Marsha1/SortingVisualizer",
		live: "https://sorting-vis-react.netlify.app/sortvisually/homescreen",
	},
	{
		id: 9,
		title: "ToDo App",
		type: "Personal",
		image: cuvette,
		skills: [
			"ReactJS",
			"Redux",
			"CSS",
			"NodeJS",
			"MongoDB",
			"Mongoose",
			"REST API",
			"CRUD",
		],
		description: [
			"01. To provide ease of making todo and plans.",
			"02. The app demonstrates CRUD operations.The data is stored in mongoDB through the nodeJS server.",
			"03. One can signup, make todos, and plan accordingly.",
		],
		sourceCode: "https://github.com/4Marsha1/CuvetteCodoctober",
		live: "https://team-hackoverflowit.netlify.app/codoctober/home",
	},
	{
		id: 3,
		title: "Text-To-Speech",
		type: "Personal",
		image: textToSpeech,
		skills: ["HTML", "CSS", "JavaScript", "SpeechSynthesis"],
		description: [
			"01. Convert text to speech in multiple accents",
			"02. Input the text in a textarea, and select the accent, we want to hear in.The app makes use of the SpeechSynthesis class",
			"03. We can set a rate, pitch and accent of the voice, On hitting enter, we recieve the audio output of the text input in our desired way.",
		],
		sourceCode:
			"https://github.com/4Marsha1/VanillaJs/tree/main/Apps/TextToSpeech",
		live: "https://sqweakit.netlify.app/",
	},
	{
		id: 5,
		title: "Wikipedia Blog Search",
		type: "Personal",
		image: wiki,
		skills: ["ReactJS", "Redux", "CSS", "REST API"],
		description: [
			"01. Read any article at your fingertip.",
			"02. Type in the Keyword(s) and number of artilces you want to fetch",
			"03. Uses the Wikipedia API to fetch articles based on keywords and number of articles requested",
		],
		sourceCode: "https://github.com/4Marsha1/WikiSearch",
		live: "https://wiki-search-api.netlify.app/",
	},
	{
		id: 6,
		title: "Exercise Tracker",
		type: "Personal",
		image: tracker,
		skills: ["NodeJS", "Express", "EJS", "MongoDB", "Mongoose"],
		description: [
			"01. To track exercise",
			"02. One can keep track of exercise per user. One can create User and add exercise completed.",
			"03. Basic CRUD app made with NodeJS for server-side, EJS for templating, and mongoDB & Mongoose for database purposes.",
		],
		sourceCode:
			"https://github.com/4Marsha1/MERN-Projects/tree/main/exercise-tracker",
		live: "#",
	},
	{
		id: 7,
		title: "Github Weekly Newsletter",
		type: "Personal",
		image: githubWeekly,
		skills: ["ReactJS", "CSS", "REST API"],
		description: [
			"01. Provide sorted resources as per Language and popularity.",
			"02. The filter bar takes an input(name of language), and makes a REST API call with the passed parameter, and returns a list of popular repositories of that language",
			"03. Contains a filter bar to sort the popular repositories",
		],
		sourceCode: "https://github.com/4Marsha1/GithubWeekly",
		live: "https://github-weekly-newsletter.netlify.app/",
	},
	{
		id: 11,
		title: "Let's Go Dutch",
		type: "Personal",
		image: letGoDutch,
		skills: ["ReactJS", "CSS", "REST API", "MongoDB", "NodeJS", "Express"],
		description: [
			"01. Divide bills among groups at ease",
			"02. Make groups, add budgets and expenses, pay the cost alloted to yourself",
			"03. One can make multiple groups",
		],
		sourceCode: "https://github.com/4Marsha1/LetsGoDutch",
		live: "#",
	},
	{
		id: 12,
		title: "Astra Dashboard",
		type: "Personal",
		image: astra,
		skills: ["ReactJS", "CSS", "Redux"],
		description: [
			"01. Basic Dashboard UI built with ReactJS & CSS",
			"02. DOM manipulation & Local storage implemented",
		],
		sourceCode: "https://github.com/4Marsha1/Astra-dashboard",
		live: "#",
	},
];
