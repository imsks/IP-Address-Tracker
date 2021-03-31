import React from "react";

// 1. Form input
export const FormInput = ({ type, placeholder }) => {
  return (
    <input type={type} placeholder={placeholder} className="form__input" />
  );
};

// 2. Form Submit Button
export const FormSubmitButton = () => {
  return (
    <button type="submit" className="btn btn-md form__submit">
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
        <path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6" />
      </svg>
    </button>
  );
};
