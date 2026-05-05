import styled from "styled-components";

export const Container = styled.div`
  width: min(1180px, 92%);
  margin: 2rem auto 80px auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;

  align-items: stretch;
`;
