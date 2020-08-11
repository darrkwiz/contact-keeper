import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const { contacts, filtered } = contactContext;

    if(contacts.lenght === 0) {
        return <h2>Add A Contact</h2>
    }

    return (
        <Fragment>
            <TransitionGroup>
                {filtered !== null 
                    ? filtered.map(contact => (
                        <CSSTransition key={contact.id} timeout={500} className="item">
                            <ContactItem contact={contact} />
                        </CSSTransition>))
                    : contacts.map(contact => (
                        <CSSTransition key={contact.id} timeout={500} className="item">
                            <ContactItem contact={contact} />
                        </CSSTransition>
                ))}
            </TransitionGroup>
        </Fragment>
    )
}

export default Contacts;