import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Footer.css';
// Icons
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

/*
 * TODO
 *
 * Requirements:
 * - use React hooks if needed
 * - use performance optimization if needed
 * 
 */ 
const Footer = ({
  disablePrev = true,
  disableNext = true,
  onClickPrev = () => null,
  onClickNext = () => null
}) => (
  <div className="footer">
    <div>
      <button
        onClick={onClickPrev}
        disabled={disablePrev}
      >
        <MdNavigateBefore />
        <span>Prev</span>
      </button>
    </div>
    
    <div>
      <button
        onClick={onClickNext}
        disabled={disableNext}
      >
        <span>Next</span>
        <MdNavigateNext />
      </button>
    </div>
  </div>
);

Footer.propTypes = {
  totalPrice: PropTypes.number,
  disablePrev: PropTypes.bool,
  disableNext: PropTypes.bool,
  onClickPrev: PropTypes.func,
  onClickNext: PropTypes.func
};

export default Footer;
