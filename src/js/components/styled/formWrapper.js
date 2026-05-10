import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem auto 80px auto;
  width: min(1180px, 92%);

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: min(100%, 360px);
    box-sizing: border-box;
    padding: 2rem;
    border-radius: 18px;
    background: white;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  }

  h2 {
    text-align: center;
    margin-bottom: 0.5rem;
  }

  .fieldGroup {
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
  }

  label {
    color: #222;
    font-weight: 700;
  }

  input,
  textarea {
    padding: 0.75rem;
    border-radius: 12px;
    border: 1px solid #d7dce8;
    font: inherit;
    font-size: 0.95rem;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: #4c7cf3;
  }

  input:focus-visible,
  textarea:focus-visible,
  button:focus-visible,
  .authLinks a:focus-visible {
    outline: 3px solid #b8c7ff;
    outline-offset: 3px;
  }

  textarea {
    resize: vertical;
    min-height: 80px;
  }

  button {
    padding: 0.85rem 1rem;
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

  button:disabled {
    background: #c6cbd6;
    cursor: not-allowed;
  }

  .authLinks {
    margin-top: 1rem;
    text-align: center;
    font-size: 0.9rem;
  }

  .authLinks p {
    margin: 0.3rem 0;
  }

  .authLinks a {
    color: #4c7cf3;
    font-weight: 700;
    text-decoration: none;
  }

  .authLinks a:hover {
    text-decoration: underline;
  }

  .errorMessage {
    margin: 0;
    padding: 0.85rem 1rem;
    border-radius: 14px;
    background: #fff1f1;
    color: #a42424;
    font-weight: 700;
  }

  &.venueFormPage {
    display: block;
  }

  &.venueFormPage .formHeader {
    margin-bottom: 2rem;
    text-align: center;
  }

  &.venueFormPage .eyebrow {
    margin: 0 0 0.35rem;
    color: #4c7cf3;
    font-weight: 800;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  &.venueFormPage .formHeader h1 {
    margin: 0;
    color: #111;
    font-size: clamp(2rem, 5vw, 3rem);
    line-height: 1.1;
  }

  &.venueFormPage .formHeader p {
    max-width: 560px;
    margin: 0.65rem auto 0;
    color: #666;
    line-height: 1.5;
  }

  &.venueFormPage .venueFormLayout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 360px;
    gap: 1.5rem;
    align-items: start;
  }

  &.venueFormPage .venueForm,
  &.venueFormPage .previewCard {
    background: white;
    border-radius: 18px;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  }

  &.venueFormPage .venueForm {
    width: auto;
    padding: 2rem;
  }

  &.venueFormPage .formSection {
    padding-bottom: 1.25rem;
    border-bottom: 1px solid #eee;
  }

  &.venueFormPage .formSection:last-of-type {
    border-bottom: none;
    padding-bottom: 0;
  }

  &.venueFormPage .formSection h2 {
    margin: 0 0 1rem;
    text-align: left;
    color: #111;
    font-size: 1.25rem;
  }

  &.venueFormPage .fieldGroup {
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
  }

  &.venueFormPage label {
    color: #222;
    font-weight: 800;
  }

  &.venueFormPage label span {
    color: #666;
    font-weight: 500;
    font-size: 0.85rem;
  }

  &.venueFormPage input,
  &.venueFormPage textarea {
    width: 100%;
    box-sizing: border-box;
  }

  &.venueFormPage textarea {
    min-height: 140px;
  }

  &.venueFormPage .helperText {
    margin: 0;
    color: #666;
    font-size: 0.85rem;
  }

  &.venueFormPage .twoColumn {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  &.venueFormPage .amenitiesGrid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
  }

  &.venueFormPage .amenityOption {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.85rem;
    border-radius: 14px;
    background: #f7f8fb;
    cursor: pointer;
  }

  &.venueFormPage .amenityOption input {
    width: 1rem;
    height: 1rem;
    accent-color: #4c7cf3;
  }

  &.venueFormPage .amenityOption:has(input:checked) {
    background: #eef2ff;
    color: #3156b3;
  }

  &.venueFormPage .previewCard {
    position: sticky;
    top: 6rem;
    overflow: hidden;
  }

  &.venueFormPage .previewCard img,
  &.venueFormPage .imageFallback {
    width: 100%;
    height: 210px;
  }

  &.venueFormPage .previewCard img {
    object-fit: cover;
  }

  &.venueFormPage .imageFallback {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f1f3f7;
    color: #666;
    font-weight: 700;
  }

  &.venueFormPage .previewContent {
    padding: 1.5rem;
  }

  &.venueFormPage .previewContent h2 {
    margin: 0;
    text-align: left;
    color: #111;
  }

  &.venueFormPage .previewLocation {
    margin: 0.4rem 0 0;
    color: #666;
  }

  &.venueFormPage .previewDescription {
    margin: 1rem 0;
    color: #555;
    line-height: 1.5;
  }

  &.venueFormPage .previewMeta {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #eee;
  }

  &.venueFormPage .previewMeta span {
    color: #666;
  }

  &.venueFormPage .previewMeta strong {
    color: #111;
    text-align: right;
  }

  &.venueFormPage .previewAmenities {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  &.venueFormPage .previewAmenities span {
    padding: 0.4rem 0.65rem;
    border-radius: 999px;
    background: #eef2ff;
    color: #3156b3;
    font-size: 0.8rem;
    font-weight: 800;
  }

  &.venueFormPage .errorMessage {
    padding: 1rem;
  }

  &.venueFormPage .formActions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  &.venueFormPage .button,
  &.venueFormPage .buttonLink {
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

  &.venueFormPage .button:hover,
  &.venueFormPage .buttonLink:hover {
    transform: translateY(-1px);
  }

  &.venueFormPage .primary {
    background: #4c7cf3;
    color: white;
  }

  &.venueFormPage .primary:hover {
    background: #3a64cc;
  }

  &.venueFormPage .secondary {
    background: #eef2ff;
    color: #3156b3;
  }

  &.venueFormPage .secondary:hover {
    background: #dfe7ff;
  }

  &.venueFormPage button:disabled {
    transform: none;
  }

  &.venueFormPage input:focus-visible,
  &.venueFormPage textarea:focus-visible,
  &.venueFormPage .button:focus-visible,
  &.venueFormPage .buttonLink:focus-visible {
    outline: 3px solid #b8c7ff;
    outline-offset: 3px;
  }

  @media (max-width: 860px) {
    &.venueFormPage .venueFormLayout {
      grid-template-columns: 1fr;
    }

    &.venueFormPage .previewCard {
      position: static;
      order: -1;
    }
  }

  @media (max-width: 560px) {
    margin-top: 3rem;

    form,
    &.venueFormPage .venueForm,
    &.venueFormPage .previewContent {
      padding: 1.25rem;
    }

    &.venueFormPage .twoColumn,
    &.venueFormPage .amenitiesGrid {
      grid-template-columns: 1fr;
    }

    &.venueFormPage .formActions {
      flex-direction: column;
    }

    &.venueFormPage .button,
    &.venueFormPage .buttonLink {
      width: 100%;
    }
  }
`;
