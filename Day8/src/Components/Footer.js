import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./footerElements";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "grey",
				textAlign:"center",
				marginTop: "-50px" }}>
		
	</h1>
	<Container>
		<Row>
		<Column>
			
			<FooterLink href="#">About US</FooterLink>
			
		</Column>
		<Column>
	
			<FooterLink href="#">Services</FooterLink>
			
		</Column>
		<Column>
			
			<FooterLink href="#">Contact Us</FooterLink>
			
		</Column>
			<FooterLink href="#">Social Media</FooterLink>
		<Column>
			
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
