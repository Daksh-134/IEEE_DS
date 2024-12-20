import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {ReactComponent as SvgDotPatternIcon} from "../../images/dot-pattern.svg"
import "../features/stylee.css"
const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input``;
const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

const SvgDotPattern1 = tw(SvgDotPatternIcon)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`
// https://submit-form.com/m0cxKNiH
export default () => {
  return (


    <div id="eventpro" >

    <Container>
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <h2>Collaborate with us: </h2>
            <h6>The submitted proposal document must include the following mentioned headers compulsorily: Name of the Student Branch, Details of the Point of Contact from the Student Branch/Affinity Group, Title of the Event, Name and About the Speaker(s), Duration of the event, Event Mode & Platform, Proposed Date & Time, Expected Number of Participants, Financial Budget and Expected Support required from the Section. 
Note: The financial support provision from Section is subject to approval. </h6>
            <form action="https://submit-form.com/m0cxKNiH">
            <input
    type="hidden"
    name="_redirect"
    
    value="https://ieeedelhisac.in/#/"
  />
              <TwoColumn>
                <Column>
                  <InputContainer>
                    <Label htmlFor="name-input"> Name</Label>
                    <Input id="name-input" type="text" name="Name" placeholder="E.g. John Doe" />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="email-input"> Email Address</Label>
                    <Input id="email-input" type="email" name="Email" placeholder="E.g. john@mail.com" />
                  </InputContainer>
                </Column>
                <Column>
                  <InputContainer tw="flex-1">
                    <Label htmlFor="name-input">Proposal Submission</Label>
                    <TextArea id="message-input" name="Proposal Submission" placeholder="E.g. Details about your event"/>
                  </InputContainer>
                  <InputContainer tw="flex-1">
                  <Label htmlFor="name-input">Attach your proposal</Label>
                    <TextArea id="message-input" name="Attach your proposal" placeholder="E.g. Attach the drive link of your proposal in doc format"/>
                  </InputContainer>
                  
                </Column>
                
              </TwoColumn>

              <SubmitButton type="submit" value="Submit">Submit</SubmitButton>
            </form>
          </div>
          <SvgDotPattern1 />
        </FormContainer>
      </Content>
    </Container>
    </div>
  );
};
