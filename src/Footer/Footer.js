import React from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  Copyright,
  Paragraph
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading style={{marginLeft: "-80px"}}>About Us</Heading>
            <Paragraph style={{fontSize:"22px"}}>
              We are providing online system for household services that is about delivering the home services at the doorstep
              just by one click and can be used by any authorized user to seek for household services through an inventive system.
            </Paragraph>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <NavLink style={{textDecoration: "none", padding: "2px"}} to="/cleaning"><FooterLink>Home Cleaning Service</FooterLink></NavLink>
            <NavLink style={{textDecoration: "none", padding: "2px"}} to="/plumbing"><FooterLink>Plumbing Service</FooterLink></NavLink>
            <NavLink style={{textDecoration: "none", padding: "2px"}} to="/carpentry"><FooterLink>Carpentry Service</FooterLink></NavLink>
            <NavLink style={{textDecoration: "none", padding: "2px"}} to="/electrical"><FooterLink>Electrical Appliance Repair Service</FooterLink></NavLink>
            <NavLink style={{textDecoration: "none", padding: "2px"}} to="/laundry"><FooterLink>Laundry Service</FooterLink></NavLink>
            <NavLink style={{textDecoration: "none", padding: "2px"}} to="/painting"><FooterLink>Home Painting Service</FooterLink></NavLink>
          </Column>

          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink><i className="zmdi zmdi-pin zmdi-hc-lg"></i> Sukkur IBA University</FooterLink>
            <FooterLink><i className="zmdi zmdi-phone zmdi-hc-lg"></i>+92(314)-4589672</FooterLink>
            <FooterLink><i className="zmdi zmdi-email zmdi-hc-lg"></i> info@gmail.com</FooterLink>
          </Column>

          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.facebook.com">
              <i className="zmdi zmdi-facebook zmdi-hc-lg">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.instagram.com">
              <i className="zmdi zmdi-instagram zmdi-hc-lg">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://twitter.com">
              <i className="zmdi zmdi-twitter zmdi-hc-lg">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
        <hr style={{marginLeft:'-50%', width: '188%', color:"white"}} />
        <Copyright>&copy; 2022 All Rights Reserved | Quick Repair for Home</Copyright>
      </Container>
    </Box>
  );
};
export default Footer;