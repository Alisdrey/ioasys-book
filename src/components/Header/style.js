import styled from 'styled-components';

export const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100px;
`;

 Logo.Image = styled.div`
  width: 105px;
  height: 36px;
  background: url(${({ logo }) => logo}) no-repeat;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

Logo.Text = styled.div`
    font-family: Heebo;
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    color: #333333;
    padding-left: 15px;
`;

export const Header = styled.div`
  width: 100%;
  max-width: 1136px;
  margin: 0 auto;
  @media screen and (max-width: 500px) {
    margin: auto;
  }
`;

Header.Body = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto 0;
    @media screen and (max-width: 1132px) {
      margin: auto 20px;
  }
`;

export const Welcome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 15px;
  @media screen and (max-width: 1132px) {
    padding-right: 0px;
  }
`;

Welcome.Name = styled.div`
  padding-right: 20px;
  @media screen and (max-width: 563px) {
    display: none
  }
`;

Welcome.Icon = styled.img`
  width: 40px;
  cursor: pointer;
`;

export const CardBody = styled.div`
   flex: 1;
   margin: 20px auto 0 auto;
   display: flex;
   justify-content: flex-start;
   flex-wrap: wrap;
   @media screen and (max-width: 1136px) {
    justify-content: center;
  }
`;

CardBody.Progress = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 0 auto;
`;

export const Container = styled.div`
   flex: 1;
   max-width: 1136px;
   margin: 0 auto;
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   @media screen and (max-width: 1136px) {
    margin: 0 10px
  }
`;