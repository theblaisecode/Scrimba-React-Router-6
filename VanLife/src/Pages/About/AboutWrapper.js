import styled from "styled-components";

const AboutWrapper = styled.div`
  .aboutImg {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    max-width: 100%;
    height: 60rem;
  }

  .about-page-content {
    color: var(--textDark);
    margin-bottom: 5.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
    margin-top: 5rem;
    text-align: left;
  }

  .about-page-content h1 {
    width: 50%;
    line-height: 3.8rem;
  }

  .about-page-content p {
    width: 65%;
    font-size: 1.8rem;
    line-height: 2.8rem;
  }

  .about-page-cta {
    background-color: var(--accent);
    color: var(--textDark);
    padding: 0 3.2rem;
    padding-bottom: 3.2rem;
    border-radius: 0.5rem;
  }

  .about-page-cta h2 {
    margin: 0;
    padding-block: 3.7rem;
  }

  .about-page-cta .link-button {
    background-color: var(--textDark);
    color: var(--textLight);
    border-radius: 1rem;
    padding: 1.5rem 3.5rem;
    transition: 0.4s;
  }

  .about-page-cta .link-button:hover {
    background-color: #3e3e3e;
    transition: all 0.4s;
  }
`;

export default AboutWrapper;
