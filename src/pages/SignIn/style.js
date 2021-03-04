import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  flex: 1;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100%;
  min-height: 100%;
  display: -webkit-flex;
  flex-direction: column;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;
export const Widget = styled.div`
  max-width: 368px;
  width: 100%;
`;

Widget.Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;

`;

export const Logo = styled.div`
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
    color: #FFFFFF;
    padding-left: 15px;

`;

export const ButtonLogin = styled.button`
    background: #FFFFFF;
    border-radius: 44px;  
    width: 85px;
    height: 36px;
    border: none;
    color: #B22E6F;
    font-weight: 700;
    cursor: pointer;
    &:hover {
      background: #B22E6F;
      color: #FFFFFF;
    }
`;