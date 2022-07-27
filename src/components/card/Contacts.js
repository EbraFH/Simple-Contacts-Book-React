import React, { Component } from "react";

import Contact from "../contact/Contact";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
import FormContact from "../contact/FormContact";
import "./contacts.css";

class Contacts extends Component {
  state = {
    showPopup: false,
    searchText: "",
  };
  //handle click for add contact will make the state showpopup to true
  handleClick = () => {
    this.setState((prevState) => ({ showPopup: !prevState.showPopup }));
  };
  //closing the add pop up
  handleClose = () => {
    this.setState({ showPopup: false });
  };
  //searching the contacts by key strokes
  searchHandler = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  render() {
    //filtering the list according to the key strokes the user entered in search bar
    //takes one contact every time and checks if it suits the entered key strokes
    const filteredText = this.props.contacts.filter(
      (contact) =>
        contact.fullName.toLowerCase().indexOf(this.state.searchText) !== -1
    );

    return (
      <>
        <div className="list">
          <div className="addClear">
            {/* icon for adding a new contact */}
            <AiOutlineUserAdd
              className="addContact"
              onClick={this.handleClick}
            />
            Contact
            {/* icon for deleting all contacts */}
            <AiFillDelete className="clearAll" onClick={this.props.clearAll} />
            All
          </div>
          {/* search bar */}
          <div className="search">
            <input
              id="search"
              type="search"
              placeholder="Search..."
              value={this.state.searchText}
              onChange={this.searchHandler}
            />
          </div>

          <div className="contactsList">
            {/* depending on the user search the contact will be filtered */}
            {this.props.contacts.length
              ? filteredText.map((contact) => {
                  return (
                    <Contact
                      key={contact.id}
                      contact={contact}
                      deleteContact={this.props.deleteContact}
                      editContact={this.props.editContact}
                      show={this.handleClick}
                      close={this.handleClose}
                    />
                  );
                })
              : " no contacts "}
          </div>
          {/* add pop up */}
          <div className="contactForm">
            <FormContact
              flag="add"
              addContact={this.props.addContact}
              show={this.state.showPopup}
              close={this.handleClose}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Contacts;
