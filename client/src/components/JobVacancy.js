import React from "react";
import { Link } from "react-router-dom";
import numeral from "numeral";

function JobVacancy({ jobPost, removeItem }) {
  const { jobTitle, salary, description, _id } = jobPost;

  return (
    <Link className="displayJob" to={`/edit/${_id}`}>
      <div>
        <h3 className="displayJob__title">{jobTitle}</h3>
        <p className="displayJob__description">{description}</p>
        <p className="displayJob__salary">£{numeral(salary).format("£0,0")}k</p>
      </div>
      <div className="displayJob__button--container">
        <button className="button displayJob__button--edit">Edit</button>
        <button
          className="button displayJob__button--delete"
          type="submit"
          onClick={(e, _id) => removeItem(e, _id)}
        >
          Delete
        </button>
      </div>
    </Link>
  );
}

export default JobVacancy;
