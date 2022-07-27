/***************
 * IMPORT LIBRARIES
 ***************/

import React, { Component } from "react";
import Contacts from "../card/Contacts";
import { contactsData } from "../main/ContactData";
import "./main.css";

export class Main extends Component {
  //state holds an array of sorted contacts by name
  state = {
    contacts: contactsData.sort((current, next) =>
      current.fullName.toLowerCase() > next.fullName.toLowerCase() ? 1 : -1
    ),
  };

  //to clear all the list
  clearAll = () => {
    this.setState({
      contacts: [],
    });
  };
  //function that adds to state a new contact after sorting if it doesn't exist
  addContactHandler = (newContact) => {
    const contactExist = this.state.contacts.find((contact) =>
      contact.phoneNumber === newContact.phoneNumber ? true : false
    );
    if (!contactExist) {
      this.setState({
        contacts: [...this.state.contacts, newContact].sort((current, next) =>
          current.fullName.toLowerCase() > next.fullName.toLowerCase() ? 1 : -1
        ),
      });
    } else {
      alert("this contact is exists !");
    }
  };
  //function that deletes a contact by id and updates the contacts
  handleDeleteContact = (id) => {
    const updatedContact = this.state.contacts.filter(
      (contact) => contact.id !== id
    );
    this.setState({
      contacts: updatedContact,
    });
  };
  //function that edits a contact if the updated informations are valid else return a message
  editContactHandler = (currentContact) => {
    const valid = this.state.contacts.filter(
      (contact) =>
        contact.id !== currentContact.id &&
        contact.phoneNumber !== currentContact.phoneNumber &&
        contact.email !== currentContact.email
    );

    if (valid.length === this.state.contacts.length - 1) {
      const editedContact = this.state.contacts.map((contact) =>
        contact.id === currentContact.id ? (contact = currentContact) : contact
      );

      this.setState({
        contacts: editedContact.sort((current, next) =>
          current.fullName.toLowerCase() > next.fullName.toLowerCase() ? 1 : -1
        ),
      });
    } else {
      alert("phoneNumber or Email is exist in other contact!");
      return true;
    }
  };

  render() {
    const contactsCounter = this.state.contacts.length; //amount of contacts

    return (
      <div className="main">
        <p className="counter">
          Total Contacts:
          {contactsCounter ? contactsCounter : 0}
        </p>
        <Contacts
          contacts={this.state.contacts}
          clearAll={this.clearAll}
          addContact={this.addContactHandler}
          deleteContact={this.handleDeleteContact}
          editContact={this.editContactHandler}
        />
      </div>
    );
  }
}

export default Main;
