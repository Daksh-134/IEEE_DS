import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {AiFillInstagram} from 'react-icons/ai'
import LogoImage from "../../images/logo.svg";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";
import { ReactComponent as LinkedInIcon } from "../../images/linkedin-icon.svg";
import logoieee from "../logos/dslogo.png"
const Container = tw.div`relative bg-gray-200 -mx-8 -mb-8 px-8`;
const FiveColumns = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20 flex flex-wrap justify-between`;

const Column = tw.div`md:w-1/5`;
const WideColumn = tw(Column)`text-center md:text-left w-full md:w-2/5 mb-10 md:mb-0`;

const ColumnHeading = tw.h5`font-bold`;

const LinkList = tw.ul`mt-4 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-20`;
const LogoText = tw.h5`ml-2 text-xl font-black text-primary-500`;

const CompanyDescription = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto md:mx-0 md:mr-4 `;

const SocialLinksContainer = tw.div`mt-4 `;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

export default () => {
  return (
    <Container>
      <FiveColumns>
        <WideColumn>
          <LogoContainer>
            <LogoImg src={logoieee} style={{width:"200px"}} />
            
          </LogoContainer>
          <CompanyDescription>
          © 2022 IEEE – All rights reserved.
          <br></br>
          A not-for-profit organization, IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.
          </CompanyDescription>
          <SocialLinksContainer>
       
            <SocialLink href="https://www.facebook.com/ieeedelhisection/">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com/ieeedelhissn">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://www.youtube.com/channel/UCdN_4EWELncBVIEbrqdfIqA">
              <YoutubeIcon />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/company/ieeedelhissn/mycompany/">
              <LinkedInIcon />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/ieeedelhissn/">
              <AiFillInstagram />
            </SocialLink>
          </SocialLinksContainer>
        </WideColumn>
        
      
        <Column>
          <ColumnHeading>References</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="https://www.ieee.org/">IEEE.org</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="http://ieeexplore.ieee.org/">IEEE Xplore Digital Library</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="http://standards.ieee.org/">IEEE Standards</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="http://spectrum.ieee.org/">IEEE Spectrum</Link>
            </LinkListItem>
          </LinkList>
        </Column>
        
        <Column>
          <ColumnHeading>Contact</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="#">Rishabh Jha</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">+91 80764 73797</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Spruha Kar</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">+91 72178 61438</Link>
            </LinkListItem>
            
          </LinkList>
        </Column>
      </FiveColumns>
    </Container>
  );
};
