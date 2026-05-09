import styled from "styled-components";

export const ProfileWrapper = styled.section`
  width: min(1000px, 92%);
  margin: 6rem auto 80px auto;

  .button,
  .buttonLink,
  input,
  textarea {
    box-sizing: border-box;
  }

  .fullWidth {
    width: 100%;
    margin-top: 1rem;
  }

  .profileCard,
  .bookingCard,
  .statCard,
  .emptyState,
  .message {
    background: white;
    border-radius: 18px;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  }

  .profileCard {
    position: relative;
    padding: 2rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  .profileLogout {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
  }

  .profileAvatar,
  .avatarFallback {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .profileAvatar {
    object-fit: cover;
  }

  .avatarFallback {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eef2ff;
    color: #3156b3;
    font-size: 2.5rem;
    font-weight: 800;
  }

  .profileInfo {
    flex: 1;
  }

  .eyebrow {
    margin: 0 0 0.25rem;
    color: #4c7cf3;
    font-weight: 800;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .profileInfo h1 {
    margin: 0 0 0.75rem;
    color: #111;
    font-size: clamp(1.7rem, 4vw, 2.3rem);
  }

  .profileInfo p {
    margin: 0.3rem 0;
    color: #555;
  }

  .profileActions,
  .cardActions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 1.25rem;
  }

  .button,
  .buttonLink {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    padding: 0.75rem 1.1rem;
    border-radius: 999px;
    border: none;
    font: inherit;
    font-weight: 700;
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

  .ghost {
    background: transparent;
    color: #555;
  }

  .ghost:hover {
    background: #f4f5f8;
  }

  .danger {
    background: #fff1f1;
    color: #a42424;
  }

  .danger:hover {
    background: #ffe1e1;
  }

  .fullWidth {
    width: 100%;
    margin-top: 1rem;
  }

  .sectionHeader {
    margin: 3rem 0 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 1rem;
  }

  .sectionHeader h2 {
    margin: 0;
    color: #111;
    font-size: 1.8rem;
  }

  .sectionHeader p {
    margin: 0.35rem 0 0;
    color: #666;
  }

  .statsGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  .statCard {
    padding: 1.25rem;
  }

  .statCard span {
    display: block;
    color: #666;
    font-size: 0.9rem;
  }

  .statCard strong {
    display: block;
    margin-top: 0.35rem;
    color: #111;
    font-size: 1.6rem;
  }

  .bookingsGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .bookingCard {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
  }

  .cardHeader,
  .venueCardHeader {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  .bookingCard h3 {
    margin: 0;
    font-size: 1.2rem;
    color: #111;
  }

  .bookingCard p {
    margin: 0.45rem 0;
    color: #555;
  }

  .badge {
    display: inline-flex;
    margin-top: 0.5rem;
    padding: 0.35rem 0.65rem;
    border-radius: 999px;
    background: #eef2ff;
    color: #3156b3;
    font-size: 0.8rem;
    font-weight: 800;
  }

  .badge.muted {
    background: #f1f1f1;
    color: #666;
  }

  .detailsList {
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
  }

  .detailRow {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding-bottom: 0.65rem;
    border-bottom: 1px solid #eee;
  }

  .detailRow span {
    color: #666;
  }

  .detailRow strong {
    color: #111;
    text-align: right;
  }

  .detailRow.total {
    border-bottom: none;
    padding-top: 0.25rem;
  }

  .message,
  .emptyState {
    padding: 1.5rem;
  }

  .emptyState {
    text-align: center;
  }

  .emptyState h3 {
    margin: 0;
    color: #111;
  }

  .emptyState p {
    margin: 0.5rem auto 1.25rem;
    max-width: 420px;
    color: #666;
  }

  .error {
    color: #b00020;
    font-weight: 700;
  }

  .venueManagementCard {
    gap: 1rem;
  }

  .venueThumb {
    width: 100%;
    height: 160px;
    border-radius: 14px;
    object-fit: cover;
  }

  .venueBookings {
    margin-top: 1rem;
    border-top: 1px solid #eee;
    padding-top: 1rem;
  }

  .venueBookings summary {
    cursor: pointer;
    font-weight: 800;
    color: #111;
  }

  .managerBookingsList {
    margin-top: 1rem;
    display: grid;
    gap: 0.75rem;
  }

  .managerBooking {
    padding: 1rem;
    border-radius: 14px;
    background: #f7f8fb;
  }

  .managerBooking p {
    margin: 0.35rem 0;
  }

  .editForm {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    color: #222;
    font-weight: 700;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.75rem;
    border-radius: 12px;
    border: 1px solid #d7dce8;
    font: inherit;
  }

  textarea {
    min-height: 120px;
    resize: vertical;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: #4c7cf3;
  }

  .button:focus-visible,
  .buttonLink:focus-visible,
  input:focus-visible,
  textarea:focus-visible,
  summary:focus-visible {
    outline: 3px solid #b8c7ff;
    outline-offset: 3px;
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
    border-radius: 18px;
    padding: 2rem;
    position: relative;
    box-shadow: 0 14px 40px rgba(0, 0, 0, 0.18);
  }

  .modal h2 {
    margin: 0 0 1rem;
  }

  .modal form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
    transform: none;
  }

  @media (max-width: 750px) {
    .profileCard {
      flex-direction: column;
      align-items: flex-start;
      padding-top: 4.25rem;
    }

    .profileLogout {
      top: 1rem;
      right: 1rem;
    }

    .sectionHeader {
      flex-direction: column;
      align-items: flex-start;
    }

    .statsGrid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 520px) {
    margin-top: 3rem;

    .profileCard,
    .bookingCard {
      padding: 1.25rem;
    }

    .profileActions,
    .cardActions {
      flex-direction: column;
    }

    .button,
    .buttonLink {
      width: 100%;
    }

    .detailRow {
      flex-direction: column;
      gap: 0.25rem;
    }

    .detailRow strong {
      text-align: left;
    }
  }
`;
