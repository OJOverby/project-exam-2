import styled from "styled-components";

export const VenuesLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  &.searchResultsLayout {
    display: block;
  }

  @media (min-width: 900px) {
    grid-template-columns: 280px 1fr;
    align-items: start;

    &.searchResultsLayout {
      display: block;
      grid-template-columns: none;
    }
  }

  .resultsHeader {
    margin-bottom: 1.5rem;
  }

  .resultsHeader h2 {
    margin: 0;
    color: #111;
    font-size: 1.4rem;
  }

  .resultsHeader p {
    margin: 0.35rem 0 0;
    color: #666;
  }

  .pagination {
    width: fit-content;
    margin: 3rem auto 0;
    padding: 0.75rem 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;

    border-radius: 16px;
    border: 1px solid rgba(215, 220, 232, 0.7);
    background: rgba(255, 255, 255, 0.72);
    backdrop-filter: blur(10px);
  }

  .pagination button {
    min-width: 120px;
    height: 44px;
    padding: 0 1rem;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    border-radius: 12px;
    border: none;
    background: #4c7cf3;
    color: white;

    font: inherit;
    font-size: 0.95rem;
    font-weight: 700;

    cursor: pointer;

    transition:
      background 0.2s ease,
      transform 0.18s ease,
      opacity 0.2s ease;
  }

  .pagination button:hover:not(:disabled) {
    background: #3f6de0;
    transform: translateY(-1px);
  }

  .pagination button:active:not(:disabled) {
    transform: translateY(0);
  }

  .pagination button:disabled {
    background: #eef1f7;
    color: #9aa3b2;
    cursor: not-allowed;
  }

  .pagination button:focus-visible {
    outline: 3px solid #b8c7ff;
    outline-offset: 3px;
  }

  .pageStatus {
    min-width: 110px;
    text-align: center;
    color: #4b5563;
    font-size: 0.95rem;
    font-weight: 700;
    letter-spacing: 0.01em;
    white-space: nowrap;
  }

  @media (max-width: 520px) {
    .pagination {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
      gap: 0.75rem;
      padding: 1rem;
    }

    .pagination button {
      width: 100%;
      min-width: unset;
    }

    .pageStatus {
      order: -1;
      min-width: unset;
    }
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
    transition:
      background 0.2s ease,
      color 0.2s ease;
  }

  .resetButton:hover:not(:disabled) {
    background: #eef2ff;
  }

  .resetButton:disabled {
    color: #999;
    background: #f1f1f1;
    cursor: not-allowed;
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

  h1,
  h2 {
    margin: 0 0 0.75rem;
    color: #111;
  }

  p {
    margin: 0 auto 1.25rem;
    max-width: 420px;
    color: #666;
  }

  .buttonLink {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0.85rem 1.4rem;
    border-radius: 999px;
    background: #4c7cf3;
    color: white;
    font-weight: 700;
    text-decoration: none;
    transition:
      background 0.2s ease,
      transform 0.2s ease;
  }

  .buttonLink:hover {
    background: #3a64cc;
    transform: translateY(-1px);
  }

  .buttonLink:focus-visible {
    outline: 3px solid #b8c7ff;
    outline-offset: 3px;
  }
`;