import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Summary.css';

/*
 * TODO
 *
 * Requirements:
 * - use React hooks if needed
 * - use performance optimization if needed
 * 
 */ 
const Summary = ({
  config = null,
  models = null,
  totalPrice = 0
}) => {
  const selectedModel = models?.find(model => model?.key === config?.model);
  const selectedType = selectedModel?.types?.find(type => type.value === config?.challenge_type);
  const selectedColor = selectedModel?.colors?.find(color => color.value === config?.color);
  const selectedWheels = selectedModel?.wheels?.find(wheels => wheels.value === config?.wheels);
  const selectedInteriorColor = selectedModel?.technology?.find(interiorColor => interiorColor.value === config?.interior_color);
  const selectedInteriorLayout = selectedModel?.interiorLayouts?.find(interiorLayout => interiorLayout.value === config?.interior_layout);

  return (
    <div className="summary">
      <h1>Your {selectedModel?.name} Platform</h1>
      <p className="summary-edd">Contact JACS for your custom solution</p>
      <div className="summary-content">
        <p>Selected Possibilities</p>
        <ul>
          <li>
            <span>{selectedModel?.name} Platform</span>
            <span> </span> 
          </li>
          <li>
            <span>{selectedType?.label} Challenge</span>
            <span> </span> 
          </li>
          <li>
            <span>{selectedColor?.label} Enclosure</span>
            <span> </span>
          </li>
          <li>
            <span>Enables {selectedInteriorColor?.label} Connectivity</span>
            <span> </span>
          </li>
          <li>
            <span>{selectedWheels?.label}</span>
            <span> </span>
          </li>
        
         
        </ul>
     
      </div>
    </div>
  );
};

Summary.propTypes = {
  config: PropTypes.object,
  models: PropTypes.array,
  totalPrice: PropTypes.number
};

export default Summary;
