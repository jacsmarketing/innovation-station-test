import React from 'react';
import { models, initialConfig } from '../../data';
// Styles
import './App.css';
// Components
import Menu from '../Menu';
import Footer from '../Footer';
import Settings from '../Settings';
import Summary from '../Summary';
import Preview from '../Preview';
import InteriorPreview from '../InteriorPreview';


class App extends React.Component {
  state = {
    currentStep: 0,
    config: initialConfig?.['t'] ?? null
  };

  get selectedModel() {
    return models.find(model =>
      model?.key === this.state.config?.model
    );
  };

  get steps() {
    return [
      {
        name: "JACS Platform",
        settings: [

          {
            label: "Select Modular Platform",
            type: "text",
            prop: "model",
            disclaimer_1: "JACS Solutions can provide customization services for hardware and firmware that work specifically for the needs of your business.",
            options: models.map(model => ({
              value: model.key,
              label: model.name
            }))
          },


          {
            label: "Select Challenge",
            type: "text",
            prop: "challenge_type",
            disclaimer_1: "Sometimes the best solution is one that doesn’t exist yet.",
            options: this.selectedModel?.types ?? [],
            
          }
        ]
      },
      {
        name: "Enclosure",
        settings: [
          {
            label: "Select Specification",
            type: "image",
            prop: "color",
            options: this.selectedModel?.colors ?? []
          },
          /*
          {
            label: "Select Size",
            type: "text",
            prop: "color",
            options: this.selectedModel?.wheels ?? []
          }
          */
        ]
      },
      {
        name: "Connectivity",
        
        settings: [
          {
            label: "Select Enabling Technology",
            type: "text",
            prop: "interior_color",
            options: this.selectedModel?.technology ?? []
          }
          /*
          {
            label: "Select interior layout",
            type: "text",
            prop: "interior_layout",
            options: this.selectedModel?.interiorLayouts ?? []
          },
          */
        ]
        
      },
      
      {
        name: "summary"
      }
      
    ];
  };
/*
  get totalPrice() {
    const basePrice = this.selectedModel?.types?.find(
      type => type.value === this.state.config?.car_type
    )?.price ?? 0;
    const colorPrice = this.selectedModel?.colors?.find(
      color => color.value === this.state.config?.color
    )?.price ?? 0;
    const wheelsPrice = this.selectedModel?.wheels?.find(
      wheels => wheels.value === this.state.config?.wheels
    )?.price ?? 0;
    const interiorColorPrice = this.selectedModel?.technology?.find(
      interiorColor => interiorColor.value === this.state.config?.interior_technology
    )?.price ?? 0;
    const interiorLayoutPrice = this.selectedModel?.interiorLayouts?.find(
      interiorLayout => interiorLayout.value === this.state.config?.interior_layout
    )?.price ?? 0;

    return basePrice + colorPrice + wheelsPrice + interiorColorPrice + interiorLayoutPrice;
  };
*/
  goToStep = (step) => {
    this.setState({ currentStep: step });
  };

  goToPrevStep = () => {
    this.setState(prevState => {
      const newStep = prevState.currentStep > 0
        ? prevState.currentStep-1
        : prevState.currentStep;
      return { currentStep: newStep };
    });
  };

  goToNextStep = () => {
    this.setState(prevState => {
      const newStep = prevState.currentStep < this.steps.length - 1
        ? prevState.currentStep+1
        : prevState.currentStep;
      return { currentStep: newStep };
    });
  };

  handleChangeModel = (model) => {
    this.setState({ config: initialConfig[model] });
  };

  handleOnSelectOption = (prop, value) => {
    if (prop === "model") {
      this.handleChangeModel(value);
    }
    else {
      this.setState(prevState => ({
        config: {
          ...prevState.config,
          [prop]: value
        }
      }));
    }
  };

  render() {
    const isFirstStep = this.state.currentStep === 0;
    const isLastStep = this.state.currentStep === this.steps.length - 1;

    return (
      <div className="app">
        <Menu
          items={this.steps.map(step => step.name)}
          selectedItem={this.state.currentStep}
          onSelectItem={this.goToStep}
        />
        <main className="app-content">
          {
            this.steps[this.state.currentStep]?.name === "interior" ? (
              <InteriorPreview
                interior={this.selectedModel?.interiorColors.find(
                  interiorColor => interiorColor.value === this.state.config.interior_color
                )}
              />
            ) : (
              <Preview
                config={this.state.config}
                models={models}
                showAllModels={isFirstStep}
                showSpecs={!isLastStep}
                onChangeModel={this.handleChangeModel}
              />
            )
          }
          {
          isLastStep ? (
            <Summary
            config={this.state.config}
            models={models}
            />
          ) : (
            <Settings
              config={this.state.config}
              settings={this.steps[this.state.currentStep].settings}
              onSelectOption={this.handleOnSelectOption}
            />
          )
        }
        </main>
        <Footer
          disablePrev={isFirstStep}
          disableNext={isLastStep}
          onClickPrev={this.goToPrevStep}
          onClickNext={this.goToNextStep}
        />
      </div>
    );
  };
};

export default App;
