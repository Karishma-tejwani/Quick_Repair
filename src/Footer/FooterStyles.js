import styled from "styled-components";

export const Box = styled.div`
  padding: 60px 60px;
  background: #3b3a3a;
  position: absolute;
  margin-bottom: 0;
  width: 100%;
  padding-bottom: 0;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin-left: 25%;
  margin-top: 0 auto;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 35px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: white;
  opacity: 0.8;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: white;
  margin-bottom: 40px;
  font-weight: bold;
`;

export const Copyright = styled.p`
  color: white;
  opacity: 0.8;
  text-align: center;
  font-size: 20px;
  padding: 40px 0;
`;

export const Paragraph = styled.p`
  margin-left: -120%;
  color: white;
  opacity: 0.8;
`;
