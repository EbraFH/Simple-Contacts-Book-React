import React, { Component } from "react";
import uuid from "uuid";
import "./FormContact.css";

class FormContact extends Component {
  beforeChange = this.props.contact; //saving the current contact
  //updating state depending on from where we opened the formContact(add or edit)
  state = this.props.contact || {
    id: uuid(),
    fullName: "",
    phoneNumber: "",
    address: "",
    email: "",
    image:
      "https://i.pinimg.com/280x280_RS/55/96/4e/55964ebb02710d6b9ce1c26f1d857906.jpg",
    gender: "",
    description: "",
  };
  //function that checks if the submit was clicked on in edit or add popups
  submitHandler = (e) => {
    e.preventDefault();
    //if the submit was made in the add popup then addContact function will be activated in main.js
    //and after that it resets the add form
    if (this.props.flag === "add") {
      this.props.addContact(this.state);
      this.setState({
        id: uuid(),
        fullName: "",
        phoneNumber: "",
        address: "",
        email: "",
        image:
          "https://i.pinimg.com/280x280_RS/55/96/4e/55964ebb02710d6b9ce1c26f1d857906.jpg",
        gender: "",
        description: "",
      });
    }
    //if the submit was made in the edit popup then editContact function will be activated in main.js
    else if (this.props.flag === "edit") {
      const test = this.props.editContact(this.state);
      //if the updated information were invalid then it returns the contact to how it was before change
      if (test) {
        this.setState(this.beforeChange);
      }
    }
    //closing the popup
    this.props.close();
  };
  //saving every key stroke
  inputChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  //upon clicking on "X" without submitting returns the pop up to how it was before change then closes the popup
  closeHandler = () => {
    this.setState(this.beforeChange);
    this.props.close();
  };

  render() {
    //deconstructing the state
    const {
      fullName,
      phoneNumber,
      address,
      email,
      image,
      gender,
      description,
    } = this.state;

    return (
      <>
        {/* popup for add or edit */}
        {/* if the pop up was shown then it will be styled as flex */}
        <div
          className="overlay"
          style={{ display: this.props.show ? "flex" : "none" }}
        >
          <div className="popup">
            <button className="close" onClick={this.closeHandler}>
              X
            </button>
            <h4 className="">Contact</h4>
            <form className="" onSubmit={this.submitHandler}>
              <div className="">
                <div className="">
                  <input
                    placeholder="full Name"
                    type="text"
                    required
                    value={fullName}
                    onChange={this.inputChangeHandler}
                    name="fullName"
                  />
                </div>

                <div className="">
                  <input
                    placeholder="phoneNumber "
                    title="Example 0534301036"
                    pattern="[0-9]{3}[0-9]{7}"
                    type="text"
                    name="phoneNumber"
                    required
                    value={phoneNumber}
                    onChange={this.inputChangeHandler}
                  />
                </div>

                <div className="">
                  <input
                    placeholder="address"
                    type="text"
                    name="address"
                    value={address}
                    onChange={this.inputChangeHandler}
                  />
                </div>

                <div className="">
                  <input
                    placeholder="E-mail"
                    title="example@nana.com"
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.inputChangeHandler}
                  />
                </div>

                <div className="">
                  <input
                    placeholder="image url"
                    type="text"
                    name="image"
                    value={image}
                    onChange={this.inputChangeHandler}
                  />
                </div>

                <div className="">
                  <label>
                    <input
                      name="gender"
                      type="radio"
                      value="male"
                      onChange={this.inputChangeHandler}
                      checked={gender === "male"}
                    />
                    <span>Male</span>
                  </label>
                </div>

                <div className="">
                  <label>
                    <input
                      name="gender"
                      type="radio"
                      value="female"
                      onChange={this.inputChangeHandler}
                      checked={gender === "female"}
                    />
                    <span>Female</span>
                  </label>
                </div>

                <div className="">
                  <input
                    placeholder="description"
                    type="text"
                    name="description"
                    value={description}
                    onChange={this.inputChangeHandler}
                  />
                </div>

                <div className="">
                  <button className="" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default FormContact;
