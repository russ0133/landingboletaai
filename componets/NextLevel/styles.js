import styled from "styled-components";

export const Container = styled.div`
  align-self: center;
  box-sizing: border-box;
  align-items: center;
  display: flex;
  padding: 0 5rem;
  @media (max-width: 650px) {
    padding: 0 1rem;
  }
  h1,
  p {
    color: var(--text-title);
    margin: 10px 0px;
    font-weight: 400;
  }
  p {
    font-weight: 500;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }
  h2 {
    color: var(--blue-hard);
    font-size: 1.2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding: 0px 3rem;
  @media (max-width: 650px) {
    flex-direction: column;
    padding: 0rem;
    flex-direction: column-reverse;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 1rem 2rem;
  @media (max-width: 650px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  button {
    width: 200px;
    border: none;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: var(--blue-hard);
    color: white;
    font-weight: 600;
    font-size: 1.2rem;
    cursor: pointer;
  }

  button:hover {
    background: transparent;
    border: 1px solid var(--blue-hard);
    color: var(--blue-hard);
  }
`;

export const AnimationContainer = styled.div``;
