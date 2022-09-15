import React from 'react';
import PropTypes from 'prop-types';
// Styles
import './Menu.css';
// Icons



class Menu extends React.Component {
  state = {
    darkMode: false,
  };

  handleOnChangeMode = () => {
    this.setState(prevState => ({
      ...prevState,
      darkMode: !prevState.darkMode,
    }));
  };

  render() {
   

    const brandLogo = this.state.darkMode
      ? `${process.env.PUBLIC_URL}/jacs_logo.png`
      : `${process.env.PUBLIC_URL}/jacs_logo.png`;

    return (
      <div className="menu-container">
        <a href="https://www.jacs-solutions.com/" className="logo">
          <img src={brandLogo} alt="JACS Solutions" />
        </a>
        <ul className="menu-nav">
          {this.props.items.map((item, i) => (
            <li
              key={item}
              onClick={() => this.props.onSelectItem(i)}
              className={this.props.selectedItem === i ? 'selected' : null}
            >
              <h2>{item}</h2>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Menu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  selectedItem: PropTypes.number,
  onSelectItem: PropTypes.func,
};

export default Menu;
