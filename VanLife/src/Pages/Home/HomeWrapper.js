import styled from "styled-components";
import homeImg from "../../img/home.png";

const HomeWrapper = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)),
    url(${homeImg}) no-repeat center center/cover;
  background-size: cover;
  min-height: 74.8rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  .heroContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 100%;
  }

  .title {
    font-size: 4rem;
    line-height: 4.2rem;
    font-weight: 700;
  }

  .description {
    text-align: center;
    width: 60rem;
    font-size: 2rem;
    line-height: 4rem;
    font-weight: 500;
  }

  .btn {
    margin-top: 3rem;
    background: var(--primary);
    color: var(--textLight);
    width: 45rem;
    text-align: center;
    padding: 1rem;
    border-radius: 0.5rem;
    transition: 0.4s;
  }

  .btn:hover {
    background: var(--accentPrimary);
    transition: all 0.4s;
  }
`;

export default HomeWrapper;
