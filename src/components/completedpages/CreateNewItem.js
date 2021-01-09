import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { postNewSocialRequest } from "../API/API";
import { redirectingFn } from "../API/LoginHandler";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import "../CSS/CreateNewItem.css";

const CreateNewItem = () => {
  const history = useHistory();

  const onFormEdit = () => console.log("hello from edit");
  const isNewItem = () => true;
  const [titleState, setTitle] = useState("");
  const [bodyState, setBody] = useState("");
  const [categoryState, setCategorystate] = useState(null);

  const handleRadioChange = (event) => {
    setCategorystate(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    postNewSocialRequest(titleState, bodyState, categoryState, (e) => {
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
        <FormLabel component="legend">Choose your category!</FormLabel>
        <RadioGroup aria-label="quiz" name="quiz" value={categoryState} onChange={handleRadioChange}>
          <FormControlLabel value={true} control={<Radio />} label="Lending items" />
          <FormControlLabel value={false} control={<Radio />} label="Organise Activity" />
        </RadioGroup>
        {submitEditButton}
      </form>
    </div>
  );
};

export default CreateNewItem;
