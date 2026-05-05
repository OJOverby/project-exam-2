import styled from "styled-components";

export const ProfileWrapper = styled.section`
  width: min(1000px, 92%);
  margin: 6rem auto 80px auto;

  .profileCard,
  .bookingCard {
    background: white;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }

  .profileCard {
    padding: 2rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  .profileAvatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
  }

  .profileInfo h2 {
    margin: 0 0 0.5rem 0;
  }

  .profileInfo p {
    margin: 0.3rem 0;
    color: #555;
  }

  button {
    margin-top: 1rem;
    padding: 0.75rem 1.1rem;
    border-radius: 999px;
    border: none;
    background: #4c7cf3;
    color: white;
    font-weight: 700;
    cursor: pointer;
  }

  button:hover {
    background: #3a64cc;
  }

  .bookingsHeader {
    margin-bottom: 1rem;
  }

  .bookingsGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
  }

  .bookingCard {
    padding: 1.5rem;
  }

  .bookingCard h4 {
    margin: 0 0 1rem 0;
    font-size: 1.2rem;
  }

  .bookingCard p {
    margin: 0.45rem 0;
    color: #555;
  }

  .message {
    background: white;
    padding: 1rem;
    border-radius: 10px;
  }

  .error {
    color: #b00020;
    font-weight: 600;
  }

  @media (max-width: 650px) {
    .profileCard {
      flex-direction: column;
      text-align: center;
    }
  }

  .modalOverlay {
    position: fixed;
    inset: 0;
    z-index: 50;
    background: rgba(0, 0, 0, 0.45);

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }

  .modal {
    width: min(420px, 100%);
    background: white;
    border-radius: 16px;
    padding: 2rem;
    position: relative;
    box-shadow: 0 14px 40px rgba(0, 0, 0, 0.18);
  }

  .modal h3 {
    margin-top: 0;
  }

  .modal form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .modal input {
    padding: 0.75rem;
    border-radius: 6px;
    border: 1px solid #ccc;
  }

  .modal input:focus {
    outline: none;
    border-color: #4c7cf3;
  }

  .closeButton {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;

    width: 34px;
    height: 34px;
    padding: 0;
    border-radius: 50%;
    background: #f1f1f1;
    color: #111;
  }

  .closeButton:hover {
    background: #ddd;
  }
`;
