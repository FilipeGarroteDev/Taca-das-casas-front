import styled from 'styled-components';

export default function AdminButton() {

  return (
    <StyledGitHubButton >
      <span>Logar como Admin</span>
    </StyledGitHubButton>
  );
}

const StyledGitHubButton = styled.div`
  width: 50%;
  height: 50px;
  background-color: #2b2b2b;
  border: none;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 20px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    color: #ffffff;
    font-size: 16px;
    font-family: 'Oswald', sans-serif;
  }

  em {
    color: #ffffff;
    font-size: 13px;
    font-weight: 300;
    font-family: 'Oswald', sans-serif;
    margin-right: 5px;
  }

  svg {
    color: #ffffff;
  }

  &:hover {
    cursor: pointer;
    filter: brightness(1.2);
  }
`;
