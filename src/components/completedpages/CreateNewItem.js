import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { postNewSocialRequest } from "../API/API";
import { redirectingFn } from "../API/LoginHandler";
import "../CSS/CreateNewItem.css";

const CreateNewItem = () => {
  const history = useHistory();

  const onFormEdit = () => console.log("hello from edit");
  const isNewItem = () => true;
  const [titleState, setTitle] = useState("");
  const [bodyState, setBody] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    postNewSocialRequest(titleState, bodyState, (e) => {
      history.push("/main");
    });
  };

  const submitEditButton = (
    <button type="submit" className="itembutton">
      {isNewItem() ? "Submit" : "Edit"}
    </button>
  );
  const deleteButton = isNewItem() ? (
    <></>
  ) : (
    <button onClick={() => console.log("Hello from delete")}> {"Delete"} </button>
  );
  // Double ternary
  const completeIncompleteButton = isNewItem() ? (
    <></>
  ) : true ? (
    <button onClick={() => console.log("Hello from completed button")}>{"Mark as Incomplete"}</button>
  ) : (
    <button onClick={() => console.log("Hello from incomplete button")}>{"Mark as Complete"}</button>
  );

  return (
    <div className="NewItemBody">
      {redirectingFn()}

      <form onSubmit={(event) => (isNewItem() ? onFormSubmit(event) : onFormEdit(event))} className="itemform">
        <h1 className="itemh1"> {isNewItem() ? "Create new item!" : "Edit item!"} </h1>
        <label className="itemlabel">
          Title:
          <input
            value={titleState}
            onInput={(e) => setTitle(e.target.value)}
            required
            minLength="5"
            maxLength="27"
            placeholder="Item Title, e.g Go surfing at 6pm"
            className="iteminput"
          />
        </label>
        <label className="itemlabel">
          Body:
          <textarea
            value={bodyState}
            onInput={(e) => setBody(e.target.value)}
            required
            minLength="5"
            maxLength="300"
            placeholder="Item Body, e.g Remember to book tickets to Hawaii"
            className="itemtextarea"
          />
        </label>
        {submitEditButton}
      </form>
    </div>
  );
};

export default CreateNewItem;
