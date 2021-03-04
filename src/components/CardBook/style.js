import styled from 'styled-components';

export const Title = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #333333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: hyphenate;
    width: 140px;
`;

export const Author = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #AB2680;
`;

export const Informacoes = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #999999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: hyphenate;
    width: 140px;
`;

export const Card = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 10px 25px -2px rgba(170, 170, 170, 0.4);
  width: 272px;
  height: 160px;
  margin: 10px 10px 0px 0px;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 583px) {
    justify-content: center;
    width: 100%;
    margin: 0 20px 10px 20px;
  }
`;

Card.Body = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
`;

Card.Image = styled.div`
  max-width: 81px;
  width: 100%;
  margin-right: 10px;
`;

Card.Info = styled.div`
  padding-top: 10;
`;

// # Modal #

export const ModalBody = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  @media screen and (max-width: 845px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

export const ModalImage = styled.div`
  max-width: 349px;
  width: 100%;
  margin-right: 40px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 845px) {
    margin-right: 0;
  }
`;

export const ModalInfo = styled.div`
  flex: 1;
  @media screen and (max-width: 845px) {
    margin-top: 20px;
  }
`;

ModalInfo.Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  color: #333333;
`;

export const ModalDetails = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
`;

ModalDetails.LabelLeft = styled.div`
  color: #333333;
  font-size: 12px;
  font-weight: 700;
`;

ModalDetails.LabelRight = styled.div`
  color: #999999;
  font-size: 12px;
`;

export const ModalReview = styled.div`
  margin-top: 20px
`;

ModalReview.Label = styled.div`
  color: #999999;
  font-size: 12px;
  line-height: 20px
`;

ModalReview.Icon = styled.img`
  margin:-3px 5px;
`;