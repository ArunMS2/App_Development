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
			
			<FooterLink href="/aboutus">About US</FooterLink>
			
		</Column>
		<Column>
	
			<FooterLink href="/pp">Privacy Policy</FooterLink>
			
		</Column>
		<Column>
			
			<FooterLink href="/contactus">Contact Us</FooterLink>
			
		</Column>
			<FooterLink href="/faq">FAQ</FooterLink>
		<Column>
			
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
