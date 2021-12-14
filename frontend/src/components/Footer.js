import React from 'react'

const today = new Date();
const Footer = () => {
    return (
        <div>
            Copyring &copy; {today.getFullYear()} orbich67
        </div>
    )
}

export default Footer;
