import React from 'react';
import PropTypes from 'prop-types';
// Styles
import './Preview.css';
// Components
import Slideshow from '../Slideshow';

/*
 * TODO: Refactor Preview as a functional component
 *
 * Requirements:
 * - Use React hooks if necessary
 * - Use function closures instead of this for callbacks and event handlers
 * - Preview logic and behavior should remain the same
 * 
 */ 
class Preview extends React.Component {
  get index() {
    return this.props?.models.findIndex(model => 
      model.key === this.props.config?.model
    );
  };

  get items() {
    return this.props.models.map(model => ({
      alt: model.name,
      url: `${process.env.PUBLIC_URL}/platforms/t${model.key}/${this.props.config.color}_${this.props.config.wheels}.png`,
      scale: ['x'].includes(model.key)
    }));
  };

  get selectedModel() {
    return this.props.models.find(model =>
      model.key === this.props.config.model
    );
  };

  get selectedType() {
    return this.selectedModel?.types?.find(type =>
      type.value === this.props.config.challenge_type
    );
  };

  get specs() {
    return this.selectedType?.specs;
  };

  handleOnClickPrev = () => {
    const newIndex = this.index > 0
      ? this.index - 1
      : this.props.models.length - 1;
    this.props.onChangeModel(this.props.models?.[newIndex]?.key);
  };

  handleOnClickNext = () => {
    const newIndex = this.index < this.props.models.length - 1
      ? this.index + 1
      : 0;
    this.props.onChangeModel(this.props.models?.[newIndex]?.key);
  };

  render() {
    return (
      <div className="preview">
        <Slideshow
          items={this.items}
          index={this.index}
          showPrev={this.props.showAllModels}
          showNext={this.props.showAllModels}
          onClickPrev={this.handleOnClickPrev}
          onClickNext={this.handleOnClickNext}
        />
        
      
      
      </div>
    );
  };
};

Preview.propTypes = {
  config: PropTypes.object,
  models: PropTypes.array,
  showAllModels: PropTypes.bool,
  showSpecs: PropTypes.bool,
  onChangeModel: PropTypes.func
};

export default Preview;
