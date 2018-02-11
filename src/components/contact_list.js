import React, { Component } from 'react'
import ContactManager from './contact_manager'

class ContactList extends Component {
    state = { currentContactId: this.props.currentContactId }

    render() {
        return (
            <ul>
                {
                    this.props.list.map((contact) => {
                        return (
                            <ContactManager key={contact.id} contact={contact} currentContactId={this.state.currentContactId} callback={this.setContactListState.bind(this)}/>
                        )
                    })
                }
            </ul>
        )
    }

    setContactListState(contact) {
        this.setState({ currentContactId: contact.id });
    }
}

export default ContactList;
