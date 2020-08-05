import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm'
import ContactFrom from '../contacts/ContactForm';

const Home = () => {
    return(
        <div className="grid-2">
            <div>
                <ContactFrom />
            </div>
            <div>
                <Contacts />
            </div>
        </div>
    );
}

export default Home;