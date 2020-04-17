import React from 'react';
import C from './Contact.module.css';

const Contact = (props) => {
    return(
        <div className={C.contact}>
            <p>INFORMATION</p>
            <p> Bak-One Company
                12345 Hollywood Bvld Street
                Los Angeles, California</p>
            <p> +444 (Phone) 123456</p>
            <p> +123 (FAX) 0011223</p>
            <p> info@bak-onecompany.com</p>
        </div>
    );
}

export default Contact;