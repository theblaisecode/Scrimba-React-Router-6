import styled from "styled-components";

const VanInfoWrapper = styled.div`
  .vanInfo {
    min-height: 74.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .vanInfoContent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5rem;
    margin: auto;
    width: 90%;
  }

  .vanInfoContent .contentTop {
    flex: 0.8;
  }

  .vanInfoContent .contentBottom {
    flex: 0.8;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .vanInfoContent img {
    width: 100%;
    border-radius: 1.5rem;
  }

  .vanInfoContent .title {
    font-size: 4rem;
    font-weight: 700;
  }

  .vanInfoContent .price {
    font-size: 2.3rem;
    font-weight: 700;
  }

  .vanInfoContent .price .highlight {
    font-weight: 400;
    font-size: 2rem;
  }

  .vanInfoContent .description {
    font-size: 1.8rem;
    line-height: 2.5rem;
  }

  .vanInfoContent .tag {
    height: 3.4rem;
    display: inline-flex;
    align-self: flex-start;
    padding: 0.6rem 2.6rem;
    font-weight: 500;
    background: var(--selection);
    color: var(--textLight);
  }

  .vanInfoContent .tag:hover {
    color: var(--selection);
  }

  .vanInfoContent .tag:focus {
    outline: none;
  }

  .vanInfoContent .tag.selected {
    color: var(--selection);
  }

  .vanInfoContent .tag.simple:hover,
  .vanInfoContent .tag.simple.selected {
    background: var(--btnOrange);
  }

  .vanInfoContent .tag.rugged:hover,
  .vanInfoContent .tag.rugged.selected {
    background: var(--btnGreen);
  }

  .vanInfoContent .tag.luxury:hover,
  .vanInfoContent .tag.luxury.selected {
    background: var(--textDark);
  }

  .vanInfoContent .btn {
    margin-top: 3rem;
    background: var(--primary);
    color: var(--textLight);
    border: none;
    text-align: center;
    padding: 1rem;
    border-radius: 0.5rem;
    transition: 0.4s;
    font-size: 1.8rem;
  }

  .btn:hover {
    background: var(--accentPrimary);
    transition: all 0.4s;
  }
`;

export default VanInfoWrapper;
