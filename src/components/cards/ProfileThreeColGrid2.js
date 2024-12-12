import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings";
import { SectionDescription } from "components/misc/Typography";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon } from "images/linkedin-icon.svg";
import "../features/stylee.css";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";
import img4 from "../features/gridimages2/IMG20230711211336 - PRERNA YADAV.jpg";
import img28 from "../features/gridimages2/IMG-20230904-WA0029 - Sahib Preet Singh.jpg";

import Rishabh from "../features/gridimages2/Rishabh_SSR - Rishabh Jha.jpg";
import Spruha from "../features/gridimages2/IMG_0970 - Spruha Kar.jpeg";
import Nyasha from "../features/gridimages2/Nyasha_Chandigarh Sub SSR - NYASHA SAURABH.jpg";
import Aradhna from "../features/gridimages2/Aradhna_RajSubSSR - Aradhna Aggarwal.jpg";
import Riya from "../features/gridimages2/RIu - Riya Singh.jpg";
import Daksh from "../features/gridimages2/Daksh_Baweja_Web_Master - DAKSH BAWEJA.jpg";
import Jonah from "../features/gridimages2/322661075_728797945341479_32642416462179779_n.webp (1) - VARIKUNTA JONAH CHRISTOPHER.jpg";
import Japjot from "../features/gridimages2/Japjot Singh _ICOC - Japjot Singh.jpg";
import Ansh from "../features/gridimages2/1688312719211 - ansh gupta.jpeg";
import Suyash from "../features/gridimages2/Suyash_EditorialTeamLead - SUYASH SHARTHI.jpg";
import Falkeet from "../features/gridimages2/falkeet_editorial - Falkeet Singh.jpg";
import Tanuj from "../features/gridimages2/IMG-20221117-WA0008 - Tanuj Goel.jpg";
import Amolica from "../features/gridimages2/IMG-20240827-WA0009 - AMOLICA CHOUDHARY.jpg";
import Anamika from "../features/gridimages2/Anamika_Kumari_WIE_Lead - Anamika Kumari.jpg";
import Mallika from "../features/gridimages2/IMG_20231225_142648~2 - Mallika.jpg";
import Garima from "../features/gridimages2/Garima_WIE_Committee  - Garima Sagar.jpg";
import Vanshika from "../features/gridimages2/Vanshika Gupta_WIE Committee - Vanshika Gupta.jpg";
import Daniyal from "../features/gridimages2/IMG-20240526-WA0013 - Daniyal Jawed.jpg";
import Rupin from "../features/gridimages2/WhatsApp Image 2024-04-22 at 19.42.13_92a56bf2 - Rupin Pratap Singh.jpg";
// import Ghanshyam from "../features/gridimages2/GHASNSHYAM.jpg";
import Angdeep from "../features/gridimages2/angad_graphicDesign - Angaddeep Singh.jpg";
import Anhad from "../features/gridimages2/Anhad Grover _Network and Technical Activities Lead - Anhad Grover.HEIC";
import Aparna from "../features/gridimages2/WhatsApp Image 2023-09-15 at 1.55.43 PM - Kunal Kumar Sharma.jpeg";

const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`mx-auto text-center`;

const Cards = tw.div`flex flex-wrap flex-row justify-center`;
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center`;
const CardImage = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`w-64 h-64 bg-contain bg-center rounded`}
`;
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`;

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`;

export default ({
  heading = "Meet These Fine Folks.",
  subheading = "Our Team",
  description = "",
  cards = [
    {
      imageSrc: img4,
      position: "Mentor",
      name: "Prerna Yadav",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/tanisha-dhawan-9b1b331ab",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: img28,
      position: "Mentor",
      name: "Sahib Preet Singh",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/piyush-kumar-sahoo-dtu",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },

    {
      imageSrc: Rishabh,
      position: "Section Student Representative",
      name: "Rishabh Jha",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/kailash-maurya-032898208/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: Spruha,
      position: "Section Student Representative",
      name: "Spruha Kar",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/anshul-yadav-784602208",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: Nyasha,
      position: "Chandigarh Subsection Student Representative",
      name: "Nyasha Saurabh",
      name1: "Chandigarh",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/idivyanshbansal",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: Aradhna,
      position: "Rajasthan Subsection Student Representative",
      name: "Aradhna Aggarwal",
      name1: "Rajasthan",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/vaidehipurohit01",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },

    {
      imageSrc: Anhad,
      position: "Networking And Social Media",
      name: "Anhad Grover",
      name1: "Lead",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "www.linkedin.com/in/mohsina-bilal-3ab454221",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: Riya,
      position: "Networking And Social Media",
      name: "Riya Gupta",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/shruti-kuhar-235884230/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },

    {
      imageSrc: Daksh,
      position: "Webmaster",
      name: "Daksh Baweja",
      name1: "Lead",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/pranav-chauhan-217bb11b9",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: Jonah,
      position: "Industrial Collaboration Committee",
      name: "Jonah Christopher",
      name1: "Lead",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/tarun-kumar-sharma-7132a122b",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: Japjot,
      position: "Industrial Collaboration Committee",
      name: "Japjot Singh",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/rohan-singh-gangster",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: Ansh,
      position: "Industrial Collaboration Committee",
      name: "Ansh Gupta",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/nandini-pachauri/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: Suyash,
      position: "Editorial Commitee",
      name: "Suyash Sharthi",
      name1: "Lead",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/amrit-kaul-289499208",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: Falkeet,
      position: "Editorial Commitee",
      name: "Falkeet Signh",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/amrit-kaul-289499208",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: Tanuj,
      position: "Editorial Commitee",
      name: "Tanuj Goel",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/amrit-kaul-289499208",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: Amolica,
      position: "Editorial Commitee",
      name: "Amolica",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/amrit-kaul-289499208",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: Anamika,
      position: "Women In Engineering",
      name: "Anamika Kumari",
      name1: "Lead",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/roshni-sahoo-107513208/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },

    {
      imageSrc: Mallika,
      position: "Women In Engineering",
      name: "Mallika",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/sjsn2002",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },

    {
      imageSrc: Garima,
      position: "Women In Engineering",
      name: "Garima Sagar",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/srishti-singh-819ba2202",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },

    {
      imageSrc: Vanshika,
      position: "Women In Engineering",
      name: "Vanshika Gupta",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/sanjana-k-2793421b5",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },

    {
      imageSrc: Daniyal,
      position: "Women In Engineering",
      name: "Daniyal Jawed",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/sanjana-k-2793421b5",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },

    {
      imageSrc: Rupin,
      position: "Graphic Designing",
      name: "Rupin Pratap Singh",
      name1: "Lead",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://bit.ly/ishan_linkedin",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: Ghanshyam,
      position: "Graphic Designing",
      name: "Ghanshyam",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/shobhna-sharma-6500ba1b9",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: Angdeep,
      position: "Graphic Designing",
      name: "Angaddeep Singh",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/kshitij-singh1118/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },

    {
      imageSrc: Aparna,
      position: "Graphic Designing",
      name: "Aparna Sisodia",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/kshitij-singh1118/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
  ],
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading>}
          {description && <Description>{description}</Description>}
        </HeadingContainer>
        <Cards style={{ textAlign: "center" }}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage className="imgt" imageSrc={card.imageSrc} />
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                <span className="name1">{card.name1}</span>
                <CardLinks>
                  {/* {card.links.map((link, linkIndex) => (
                    (link.icon==LinkedinIcon&&<a key={linkIndex} className="link" href={link.url}>
                      <link.icon className="icon" />
                    </a>)
                  ))} */}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
