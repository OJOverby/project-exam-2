import styled from "styled-components";

export const BookingWrapper = styled.section`
  width: min(1000px, 92%);
  margin: 5rem auto 80px auto;

  .bookingHeader {
    margin-bottom: 2rem;
    text-align: center;
  }

  .eyebrow {
    margin: 0 0 0.35rem;
    color: #4c7cf3;
    font-weight: 800;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .bookingHeader h1 {
    margin: 0;
    color: #111;
    font-size: clamp(2rem, 5vw, 3rem);
    line-height: 1.1;
  }

  .bookingHeader p {
    max-width: 560px;
    margin: 0.65rem auto 0;
    color: #666;
    line-height: 1.5;
  }

  .bookingLayout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 360px;
    gap: 1.5rem;
    align-items: start;
  }

  .bookingForm,
  .summaryCard,
  .messageCard {
    background: white;
    border-radius: 18px;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  }

  .bookingForm {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .bookingForm h2,
  .summaryCard h2 {
    margin: 0;
    color: #111;
    font-size: 1.35rem;
  }

  .helperText {
    margin: 0.35rem 0 0;
    color: #666;
    font-size: 0.95rem;
  }

  .fieldGroup {
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
  }

  label {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    font-weight: 800;
    color: #222;
  }

  label span {
    color: #666;
    font-weight: 500;
    font-size: 0.85rem;
  }

  input,
  .react-datepicker-wrapper,
  .react-datepicker-wrapper input {
    width: 100%;
  }

  input,
  .react-datepicker-wrapper input {
    padding: 0.8rem 0.9rem;
    border-radius: 12px;
    border: 1px solid #d7dce8;
    font: inherit;
    font-size: 0.95rem;
    box-sizing: border-box;
    background: white;
  }

  input:focus,
  .react-datepicker-wrapper input:focus {
    outline: none;
    border-color: #4c7cf3;
  }

  input:disabled,
  .react-datepicker-wrapper input:disabled {
    background: #f4f5f8;
    color: #888;
    cursor: not-allowed;
  }

  .error {
    margin: 0;
    padding: 1rem;
    border-radius: 14px;
    background: #fff1f1;
    color: #a42424;
    font-weight: 700;
  }

  .button,
  .buttonLink {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0.85rem 1.2rem;
    border-radius: 999px;
    border: none;
    font: inherit;
    font-weight: 800;
    text-decoration: none;
    cursor: pointer;
    transition:
      background 0.2s ease,
      transform 0.2s ease;
  }

  .button:hover,
  .buttonLink:hover {
    transform: translateY(-1px);
  }

  .primary {
    background: #4c7cf3;
    color: white;
  }

  .primary:hover {
    background: #3a64cc;
  }

  .secondary {
    background: #eef2ff;
    color: #3156b3;
  }

  .secondary:hover {
    background: #dfe7ff;
  }

  button:disabled {
    background: #c6cbd6;
    cursor: not-allowed;
    transform: none;
  }

  .summaryCard {
    overflow: hidden;
    position: sticky;
    top: 6rem;
  }

  .venueImage,
  .imageFallback {
    width: 100%;
    height: 190px;
  }

  .venueImage {
    object-fit: cover;
  }

  .imageFallback {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f1f3f7;
    color: #666;
    font-weight: 700;
  }

  .summaryContent {
    padding: 1.5rem;
  }

  .location {
    margin: 0.4rem 0 0;
    color: #666;
  }

  .summaryRows {
    margin-top: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .summaryRow {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid #eee;
  }

  .summaryRow span {
    color: #666;
  }

  .summaryRow strong {
    color: #111;
    text-align: right;
  }

  .summaryRow.total {
    padding-top: 0.25rem;
    padding-bottom: 0;
    border-bottom: none;
  }

  .summaryRow.total span,
  .summaryRow.total strong {
    color: #3156b3;
    font-size: 1.15rem;
    font-weight: 900;
  }

  .messageCard {
    padding: 2rem;
    text-align: center;
    color: #555;
  }

  .button:focus-visible,
  .buttonLink:focus-visible,
  input:focus-visible,
  .react-datepicker-wrapper input:focus-visible {
    outline: 3px solid #b8c7ff;
    outline-offset: 3px;
  }

  @media (max-width: 820px) {
    margin-top: 3rem;

    .bookingLayout {
      grid-template-columns: 1fr;
    }

    .summaryCard {
      position: static;
      order: -1;
    }
  }

  @media (max-width: 520px) {
    .bookingForm,
    .summaryContent,
    .messageCard {
      padding: 1.25rem;
    }

    label,
    .summaryRow {
      flex-direction: column;
      gap: 0.25rem;
    }

    .summaryRow strong {
      text-align: left;
    }
  }
`;
