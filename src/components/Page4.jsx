import React from "react";
import "./Page4.css";

export default function Page4() {
  return (
    <>
      <div className="a">
        <div className="b">
          <h1>
            <u>Create Issue</u>
          </h1>
        </div>
        <div className="c">
          <form action="#">
            <label for="exampleFormControlTextarea1" class="form-label">
              Write your issue
            </label>
            <textarea
              className="form-control "
              id="exampleFormControlTextarea1"
              rows="15"
            ></textarea>

            <button className="d" type="submit">
              Post
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
