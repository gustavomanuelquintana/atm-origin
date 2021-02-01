import React from "react";
import { Link } from "react-router-dom";
import "./SubmitButton.css";

function SubmitButton({ DoNumber }) {
  return (
    <div className="submitButton">
      <Link to={`/sectionpin`}>
        {" "}
        <button
          name="submitButton"
          id="submitButton"
          class="btn btn-primary btn-lg msgValidateCard"
          type="button"
          onClick={DoNumber}
        >
          Ingresar Al sistema
        </button>
      </Link>
    </div>
  );
}

export default SubmitButton;
