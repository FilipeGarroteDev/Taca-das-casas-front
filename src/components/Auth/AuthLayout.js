import styled from 'styled-components';

export default styled.section`
  height: 70%;
  width: 80%;
  max-width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  overflow: hidden;

  > span {
    font-size: 12px;
    font-weight: 400;
    color: #ffffff;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
      font-weight: 700;
    }
  }

  >img{
    width: 150px;
    height: 150px;
  }
`;
