import styled from "styled-components";

const VansWrapper = styled.div`
  .contentTop {
    margin: 2rem 0;
  }

  .vanFilter {
    margin-top: 2rem;
    display: flex;
    gap: 1.2rem;
  }

  .vanFilter .vanTypes {
    background: var(--selection);
    color: var(--textDark);
  }

  .contentBottom {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5rem;
    margin: 5rem 0;
  }

  .vanCard img {
    width: 100%;
    border-radius: 1.5rem;
  }

  .vanCard .cardBottom .head {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
    font-size: 2.3rem;
    font-weight: 700;
  }

  .cardBottom .head .price {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .cardBottom .head .price .highlight {
    font-weight: 500;
    font-size: 1.5rem;
  }

  .vanCard .btn {
    height: 3.4rem;
    display: inline-block;
    padding: 0.6rem 2.6rem;
    font-weight: 500;
    background: var(--selection);
    color: var(--textLight);
  }

  .vanCard .btn:hover {
    color: var(--selection);
  }

  .vanCard .btn:focus {
    outline: none;
  }

  .vanCard .btn.selected {
    color: var(--selection);
  }

  .vanCard .btn.simple:hover,
  .vanCard .btn.simple.selected {
    background: var(--btnOrange);
  }

  .vanCard .btn.rugged:hover,
  .vanCard .btn.rugged.selected {
    background: var(--btnGreen);
  }

  .vanCard .btn.luxury:hover,
  .vanCard .btn.luxury.selected {
    background: var(--textDark);
  }
`;

export default VansWrapper;
