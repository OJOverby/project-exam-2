import styled from "styled-components";

export const BookingWrapper = styled.section`
  display: flex;
  justify-content: center;
  margin: 5rem auto 80px auto;

  .bookingCard {
    width: 420px;
    padding: 2rem;
    border-radius: 10px;
    background: white;
    box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  }

  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }

  .venueInfo {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  label {
    font-weight: 600;
  }

  input,
  .react-datepicker-wrapper input {
    width: 100%;
    border-radius: 6px;
    border: 1px solid rgb(204, 204, 204);
    font-size: 0.95rem;
    box-sizing: border-box;
  }

  input:focus,
  .react-datepicker-wrapper input:focus {
    outline: none;
    border-color: #4c7cf3;
  }

  .priceBox {
    margin-top: 0.5rem;
    padding: 1rem;
    border-radius: 10px;
    background: #f5f7ff;
    border: 1px solid #dbe3ff;
  }

  .priceBox p {
    margin: 0.4rem 0;
  }

  .totalPrice {
    color: #2f55c7;
  }

  button {
    padding: 0.8rem;
    border-radius: 6px;
    border: none;
    background: #4c7cf3;
    color: white;
    font-weight: 600;
    cursor: pointer;
  }

  button:hover {
    background: #3a64cc;
  }

  button:disabled {
    background: #aaa;
    cursor: not-allowed;
  }

  .error {
    margin-top: 1rem;
    color: #b00020;
    text-align: center;
    font-weight: 600;
  }

  .success {
    margin-top: 1rem;
    color: #1b7f3a;
    text-align: center;
    font-weight: 600;
  }
`;