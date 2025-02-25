import React from "react";

import {
	makeStyles,
	Paper
} from "@material-ui/core";

import MainContainer from "../../components/MainContainer";
import MainHeader from "../../components/MainHeader";
import MainHeaderButtonsWrapper from "../../components/MainHeaderButtonsWrapper";
import Title from "../../components/Title";
import { i18n } from "../../translate/i18n";

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
	mainPaper: {
		width: '100%',
		minHeight: '200px',
		overflowY: "scroll",
		...theme.scrollbarStyles,
	},
	heading: {
	  fontSize: theme.typography.pxToRem(20),
	  flexBasis: '33.33%',
	  flexShrink: 0,
	},
	secondaryHeading: {
	  fontSize: theme.typography.pxToRem(15),
	  color: theme.palette.text.secondary,
	}
}));

const About = () => {
	const classes = useStyles();

	return (
		<MainContainer>
			<MainHeader>
				<Title>{i18n.t("about.title")}</Title>
				<MainHeaderButtonsWrapper>
				</MainHeaderButtonsWrapper>
			</MainHeader>
			
		</MainContainer>
	);
};

export default About;
