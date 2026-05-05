import styled from "styled-components";

export const HomeSection = styled.section`
  width: min(1180px, 92%);
  margin: 3rem auto 80px auto;

  .sectionHeader {
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 1rem;
    margin-bottom: 1.25rem;
  }

  .sectionHeader h2 {
    margin: 0;
    font-size: 1.8rem;
  }

  .sectionHeader p {
    margin: 0.4rem 0 0 0;
    color: #666;
  }

  .sectionHeader a {
    color: #4c7cf3;
    font-weight: 700;
    text-decoration: none;
    white-space: nowrap;
  }

  .sectionHeader a:hover {
    text-decoration: underline;
  }

  .categories {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .categories a {
    padding: 0.9rem 1.4rem;
    border-radius: 999px;
    background: white;
    color: #333;
    text-decoration: none;
    font-weight: 700;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  .categories a:hover {
    background: #f5f7ff;
    color: #4c7cf3;
  }

  @media (max-width: 700px) {
    .sectionHeader {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;
