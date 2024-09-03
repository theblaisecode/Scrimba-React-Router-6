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
    gap: 4rem;
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
`;

export default VansWrapper;
