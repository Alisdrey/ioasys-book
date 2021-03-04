import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  flex: 1;
  @media screen and (max-width: 866px) {
    height: auto;
  }
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