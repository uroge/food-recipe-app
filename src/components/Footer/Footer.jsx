import React from 'react';
import './Footer.scss';

import { GiFoodTruck } from 'react-icons/gi';
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa';
import { RiCopyrightLine } from 'react-icons/ri';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__logo-container">
          <GiFoodTruck className="footer__logo" />
        </div>
        <div className="footer__icons">
          <a
            href="https://facebook.com"
            className="footer__icon"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="footer__icon-facebook" />
          </a>
          <a
            href="https://instagram.com"
            className="footer__icon"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagramSquare className="footer__icon-instagram" />
          </a>
        </div>
      </div>
      <p className="footer__paragraph">
        <span>
          <RiCopyrightLine />
        </span>{' '}
        Uroš Milosavljević
      </p>
    </div>
  );
};

export default Footer;
