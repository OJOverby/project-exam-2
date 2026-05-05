import styled from "styled-components";

export const VenueCard = styled.div`
  width: min(100%, 820px);
  margin: 1.5rem auto;
  background: white;
  border-radius: 14px;
  overflow: hidden;

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);

  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 260px; /* reduced from 320 */
    object-fit: cover;
  }

  .content {
    padding: 1.5rem; /* reduced */
    display: flex;
    flex-direction: column;
    gap: 0.75rem; /* tighter spacing */
  }

  h2 {
    font-size: 1.5rem; /* slightly smaller */
    margin: 0;
  }

  .location {
    color: #666;
    font-size: 0.9rem;
  }

  .price {
    font-size: 1.2rem;
    font-weight: 700;
    color: #111;
  }

  .description {
    line-height: 1.4;
    color: #444;
  }

  .facilities {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.3rem 0.8rem; /* tighter */
    margin-top: 0.5rem;
  }

  .facility {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
  }

  .greencheckmark {
    color: green;
    font-weight: bold;
  }

  .redx {
    color: red;
    font-weight: bold;
  }

  /* CLEANED: only one calendar block */
  .calendar {
    margin-top: 1.2rem;
    padding: 1rem;
    border-radius: 12px;
    background: linear-gradient(180deg, #f8f9ff 0%, #ffffff 100%);
    border: 1px solid #e3e8ff;
    text-align: center;
  }

  .calendar h3 {
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }

  .react-datepicker {
    border: none;
    border-radius: 12px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
    font-family: inherit;
    overflow: hidden;
    transform: scale(0.95); /* makes calendar slightly smaller */
  }

  .react-datepicker__header {
    background: #4c7cf3;
    border-bottom: none;
    padding-top: 0.6rem;
  }

  .react-datepicker__current-month {
    color: white;
    font-weight: 700;
    font-size: 0.9rem;
  }

  .react-datepicker__day-name {
    color: white;
    font-weight: 600;
    font-size: 0.8rem;
  }

  .react-datepicker__day {
    border-radius: 50%;
    font-size: 0.8rem;
  }

  .react-datepicker__day:hover {
    background: #dbe3ff;
  }

  .react-datepicker__day--disabled {
    color: #bbb;
    text-decoration: line-through;
    background: #f2f2f2;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background: #4c7cf3;
    color: white;
  }

  .cta {
    margin-top: 1.2rem;
    display: flex;
    justify-content: center;
  }

  button {
    padding: 0.7rem 1.2rem;
    border-radius: 999px;
    border: none;
    background: #4c7cf3;
    color: white;
    font-weight: 700;
    cursor: pointer;
    font-size: 0.95rem;
  }

  button:hover {
    background: #3a64cc;
  }
`;
