import React, { Component } from 'react';
import ContactList from './contact_list';
import ReactDOM from 'react-dom';

class ContactManager extends Component {
    state = {}
    render() {
        const { contact, currentContactId } = this.props;
        return (
            <div>
                <li onClick={() => this.selectContact(contact)} className={(currentContactId === contact.id ? "active" : "")}>
                    {contact.name}
                </li>
                <div className={'childList' + contact.id} >
                </div>
            </div>
        )
    }

    selectContact(contact) {
        this.props.callback(contact);
        let childList = document.querySelector('.childList' + contact.id);
        if (childList.innerHTML === "") {
            if (contact.type === "Group") {
                ReactDOM.render(<ContactList list={contact.contacts} currentContactId={contact.id} />, childList)
            }
        } else {
            ReactDOM.unmountComponentAtNode(childList);
        }
    }
}

export default ContactManager;