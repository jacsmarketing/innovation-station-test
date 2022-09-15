import React from 'react';
import PropTypes from 'prop-types';
// Styles
import './InteriorPreview.css';

/*
 * TODO
 *
 * Requirements:
 * - use React hooks if needed
 * - use performance optimization if needed
 * 
 */  



const InteriorPreview = ({ interior = null }) => {
 return (
    <div className="interior-preview">
      
    </div>
  );
};

InteriorPreview.propTypes = {
  interior: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string
  })
};

export default InteriorPreview;
