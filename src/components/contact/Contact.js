import React, { Component } from "react";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import FormContact from "../contact/FormContact";
import "./contact.css";

class Contact extends Component {
  //state that holds 2 variables, showContact to show the contact information
  //EditForm to show the pop up interface to edit the contact
  state = {
    showContact: false,
    showEditForm: false,
  };
  //deleting a contact by using deleteContact function that is in main.js
  deleteContactHandler = (id) => () => {
    this.props.deleteContact(id);
  };
  //showing the contact information by setting the showContact to true
  showContactHandler = () => {
    this.setState({
      showContact: !this.state.showContact,
    });
  };
  //exiting the edit popup by setting the showEditContact to FALSE
  handleClose = () => {
    this.setState({ showEditForm: false });
  };
  //showing the edit pop up by setting the showEditContact to true
  showEditFormHandler = () => {
    this.setState({
      showEditForm: !this.state.showEditForm,
    });
  };

  render() {
    //deconstructing the contact
    const {
      id,
      fullName,
      phoneNumber,
      address,
      email,
      image,
      gender,
      description,
    } = this.props.contact;

    return (
      //for each contact there arre 3 buttons, show contact information, edit contact , delete contact.
      <>
        <div className="contact">
          <div className="oneContact">
            {/* image of the contact + name */}
            <img src={image} alt="" />
            <div>{fullName}</div>
            {/* icons area */}
            <div className="contIco">
              <AiFillCaretDown
                className="showContact"
                onClick={this.showContactHandler}
              />
              <AiFillDelete
                className="deleteContact"
                onClick={this.deleteContactHandler(id)}
              />
              <AiFillEdit
                className="editContact"
                onClick={this.showEditFormHandler}
              />
            </div>
            {/* after clicking on the show contact button this will appear holding the information */}
            <div className="contactInfo">
              {this.state.showContact && (
                <ul>
                  <li>{phoneNumber}</li>
                  <li>{address}</li>
                  <li>{email}</li>
                  <li>{gender}</li>
                  <li>{description}</li>
                </ul>
              )}
            </div>
          </div>
          {/* after clicking on edit button a pop up will appear holding these information */}
          <div className="contactForm">
            <FormContact
              flag="edit"
              contact={this.props.contact}
              editContact={this.props.editContact}
              show={this.state.showEditForm}
              close={this.handleClose}
            />
          </div>
        </div>
      </>
    );
  }
}
export default Contact;
