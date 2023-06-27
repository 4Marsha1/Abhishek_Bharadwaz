import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Tooltip } from "@mui/material";

const ACTIONS = [
	{ icon: <GitHubIcon />, name: "Github" },
	{ icon: <LinkedInIcon />, name: "LinkedIn" },
	{ icon: <InstagramIcon />, name: "Instagram" },
	{ icon: <FacebookIcon />, name: "Facebook" },
	{ icon: <TwitterIcon />, name: "Twitter" },
];

export const LINKS = [
	"https://github.com/4Marsha1",
	"https://www.linkedin.com/in/abhishek-bharadwaz/",
	"https://www.instagram.com/bharadwaz_abhishek/",
	"https://www.facebook.com/bharadwaz.abhishek/",
	"https://twitter.com/Abhishek0696",
];

export const SpeedDialMenu: React.FunctionComponent =
	(): React.ReactElement => {
		const [open, setOpen] = React.useState(false);
		const handleOpenToggle = () => setOpen(!open);
		return (
			<Box
				sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}
				className="fixed bottom-16 left-10"
			>
				<SpeedDial
					open={open}
					onClick={handleOpenToggle}
					ariaLabel="SpeedDial openIcon example"
					icon={
						<Tooltip title="Socials" arrow placement="bottom">
							<AccountTreeIcon fontSize="medium" />
						</Tooltip>
					}
					FabProps={{
						sx: {
							bgcolor: "rgb(220 55 38)",
							"&:hover": {
								bgcolor: "rgb(220 55 38)",
							},
						},
					}}
				>
					{ACTIONS.map((action, idx) => (
						<SpeedDialAction
							key={action.name}
							icon={action.icon}
							onClick={() => {
								window.open(LINKS[idx]);
							}}
							FabProps={{
								sx: {
									bgcolor: "#f6f6f6",
									"&:hover": {
										bgcolor: "white",
									},
								},
							}}
						/>
					))}
				</SpeedDial>
			</Box>
		);
	};
