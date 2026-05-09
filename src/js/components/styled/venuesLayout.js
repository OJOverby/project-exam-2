import styled from "styled-components";

export const VenuesLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 900px) {
    grid-template-columns: 280px 1fr;
    align-items: start;
  }
`;

export const FilterPanel = styled.aside`
  padding: 1.25rem;
  border-radius: 18px;
  background: white;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);

  @media (min-width: 900px) {
    position: sticky;
    top: 1rem;
  }

  .filterHeader {
    margin-bottom: 1.5rem;
  }

  h1 {
    margin: 0;
    font-size: 1.5rem;
    color: #111;
  }

  p {
    margin: 0.35rem 0 0;
    color: #666;
    font-size: 0.95rem;
  }

  .filterGroup {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 1.25rem;
    padding: 0;
    border: none;
  }

  label,
  legend {
    font-weight: 700;
    color: #222;
    font-size: 0.95rem;
  }

  label span {
    display: block;
    margin-top: 0.25rem;
    color: #666;
    font-weight: 500;
    font-size: 0.85rem;
  }

  select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d7dce8;
    border-radius: 12px;
    background: white;
    font: inherit;
  }

  select:focus-visible,
  input:focus-visible,
  button:focus-visible {
    outline: 3px solid #b8c7ff;
    outline-offset: 3px;
  }

  .rangeWrapper {
    padding: 0.5rem 0.25rem 0;
  }

  .rangeTrack {
    height: 6px;
    width: 100%;
    border-radius: 999px;
    background: #dbe3ff;
  }

  .rangeThumb {
    height: 18px;
    width: 18px;
    border-radius: 999px;
    background: white;
    border: 2px solid #4c7cf3;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
  }

  .rangeLabels {
    display: flex;
    justify-content: space-between;
    margin-top: 0.5rem;
    color: #666;
    font-size: 0.8rem;
  }

  .checkboxLabel {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-weight: 500;
    color: #333;
    user-select: none;
  }

  input[type="checkbox"] {
    width: 1rem;
    height: 1rem;
    accent-color: #4c7cf3;
  }

  .resetButton {
    width: 100%;
    margin-top: 1.5rem;
    padding: 0.8rem 1rem;
    border-radius: 999px;
    border: 1px solid #d7dce8;
    background: #f7f8fb;
    color: #222;
    font-weight: 700;
    cursor: pointer;
  }

  .resetButton:hover {
    background: #eef2ff;
  }
`;

export const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1180px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const EmptyState = styled.div`
  padding: 2rem;
  border-radius: 18px;
  background: white;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  color: #555;
  text-align: center;
`;
