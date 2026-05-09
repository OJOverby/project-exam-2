import styled from "styled-components";

export const VenueCard = styled.article`
  width: min(100%, 920px);
  margin: 1.5rem auto;
  background: white;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);

  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  img,
  .imageFallback {
    width: 100%;
    height: 260px;

    @media (min-width: 768px) {
      height: 100%;
      min-height: 560px;
    }
  }

  img {
    object-fit: cover;
  }

  .imageFallback {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f1f3f7;
    color: #666;
    font-weight: 600;
  }

  .content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    @media (min-width: 768px) {
      padding: 2rem;
    }
  }

  .venueHeader {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: flex-start;
  }

  h1,
  h2 {
    margin: 0;
    color: #111;
  }

  h1 {
    font-size: clamp(1.6rem, 3vw, 2rem);
    line-height: 1.1;
  }

  h2 {
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
  }

  .location {
    margin: 0.4rem 0 0;
    color: #666;
    font-size: 0.95rem;
  }

  .stars {
    display: inline-flex;
    gap: 0.25rem;
    flex-shrink: 0;
  }

  .description {
    margin: 0;
    line-height: 1.55;
    color: #444;
  }

  .facilities {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.6rem;

    @media (min-width: 480px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .facility {
    display: flex;
    justify-content: space-between;
    gap: 0.75rem;
    padding: 0.75rem;
    border-radius: 12px;
    background: #f7f8fb;
    font-size: 0.9rem;
  }

  .available,
  .unavailable {
    font-weight: 700;
    white-space: nowrap;
  }

  .available {
    color: #1f7a3f;
  }

  .unavailable {
    color: #8a3a3a;
  }

  .calendar {
    padding: 1rem;
    border-radius: 14px;
    background: linear-gradient(180deg, #f8f9ff 0%, #ffffff 100%);
    border: 1px solid #e3e8ff;
    text-align: center;
  }

  .calendarHelp {
    margin: 0 0 0.75rem;
    color: #666;
    font-size: 0.85rem;
  }

  .react-datepicker {
    border: none;
    border-radius: 12px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
    font-family: inherit;
    overflow: hidden;
    transform: scale(0.95);
  }

  .react-datepicker__header {
    background: #4c7cf3;
    border-bottom: none;
    padding-top: 0.6rem;
  }

  .react-datepicker__current-month,
  .react-datepicker__day-name {
    color: white;
    font-weight: 700;
  }

  .react-datepicker__current-month {
    font-size: 0.9rem;
  }

  .react-datepicker__day-name,
  .react-datepicker__day {
    font-size: 0.8rem;
  }

  .react-datepicker__day {
    border-radius: 50%;
  }

  .react-datepicker__day:hover {
    background: #dbe3ff;
  }

  .react-datepicker__day--disabled {
    color: #999;
    text-decoration: line-through;
    background: #f2f2f2;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background: #4c7cf3;
    color: white;
  }

  .bookingPanel {
    margin-top: auto;
    padding-top: 1rem;
    border-top: 1px solid #eee;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .price {
    margin: 0;
    font-size: 1.3rem;
    font-weight: 800;
    color: #111;
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
