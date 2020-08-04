import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Section = styled.div`
  height: 100%;
  display: flex;
`;

export const BoxArea = styled.div`
  width: 100%;
  max-width: 300px;
  margin-top: 20px;
  margin-left: 20px;
`;

export const Box = styled.div`
  background: #fff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  height: 200px;
  position: relative;
  padding: 18px;

  ul.quotation {
    li {
      list-style: none;
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #666464;
      transition: 300ms;
      cursor: pointer;
      span {
        color: #a721a1;
        & + span {
          color: #666464;
        }
      }
      & + li {
        margin-top: 8px;
      }
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  ul.friends {
    li {
      list-style: none;
      padding: 0 10px;
      display: flex;
      align-items: center;
      transition: 300ms;
      cursor: pointer;
      img {
        width: 25px;
        height: 25px;
        margin-right: 10px;
        border-radius: 50%;
      }
      span {
        color: #666464;
      }
      & + li {
        margin-top: 8px;
      }
      &:hover {
        transform: scale(1.1);
      }
    }
  }

  button {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 35px;
    background: #fff;
    border: 3px solid #29a1c7;
    border-radius: 0 0 10px 10px;
    width: 100%;
    color: #221f3b;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    transition: 300ms;
    svg {
      margin-left: 5px;
    }
    &:hover {
      border-color: ${shade(0.2, '#29a1c7')};
      background: rgba(41, 161, 199, 0.2);
      letter-spacing: 1px;
    }
  }
  & + div {
    margin-top: 20px;
  }
`;

export const Feed = styled.div`
  height: calc(100vh - 50px - 20px);
  width: 100%;
  border-radius: 10px 10px 0 0;
  margin: 20px 20px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #f1f1f1;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  overflow: auto;

  h3 {
    color: #636363;
    border-bottom: 1px solid #636363;
    width: 90%;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const FeedItem = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }

  & + div {
    margin-top: 20px;
  }

  .notice {
    background: #e8e8e8;
    border-radius: 10px;
    width: 100%;
    padding: 8px;
    & .header {
      color: #000;
      border-bottom: 1px solid #898585;
      & .company {
        color: #277dcd;
        font-weight: 700;
        cursor: pointer;
      }
      & .quotation {
        color: #a721a1;
        font-weight: 700;
        cursor: pointer;
      }
    }

    & .info {
      margin-top: 2px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      svg {
        margin-right: 5px;
      }
    }
  }
`;
