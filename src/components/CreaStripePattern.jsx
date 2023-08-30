/* eslint-disable react/prop-types */
import styled from 'styled-components';

export default function CreaStripePattern({position}) {


  return (
    <Footer position={position}>
      <ColorDiv color='#fcc325'></ColorDiv>
      <ColorDiv color='#53938d'></ColorDiv>
      <ColorDiv color='#006fab'></ColorDiv>
      <ColorDiv color='#805592'></ColorDiv>
      <ColorDiv color='#EB5B80'></ColorDiv>
    </Footer>
  );
}

const Footer = styled.footer`
  width: 100%;
  height: 4%;
  display: flex;
  position: fixed;
  top: ${props => props.position === "footer" ? "none" : 0};
  bottom: ${props => props.position === "footer" ? 0 : "none"};
  left: 0;
`;

const ColorDiv = styled.footer`
  width: 20%;
  height: 100%;
  display: flex;
  background-color: ${props => props.color};
`;
