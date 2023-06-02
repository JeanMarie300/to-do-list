import React from 'react';

const currentDay = new Date();
const year = currentDay.getFullYear();

function Footer() {
    return (
        <footer className='footer'>
            <p>Copyright {year}</p>
        </footer>
    );
}

export default Footer;