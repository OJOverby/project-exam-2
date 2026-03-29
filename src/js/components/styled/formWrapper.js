import styled from "styled-components";

export const FormWrapper = styled.div`

  display: flex;
  justify-content: center;
  margin-top: 5rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 360px;
    padding: 2rem;
    border-radius: 10px;
    background: white;
    box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  }

  h2 {
    text-align: center;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    padding: 0.7rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 0.95rem;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: #4c7cf3;
  }

  textarea {
    resize: vertical;
    min-height: 80px;
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
`;