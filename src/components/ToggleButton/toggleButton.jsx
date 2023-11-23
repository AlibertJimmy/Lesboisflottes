// Import React Libraries
import React, { Component } from 'react';
import Switch from 'react-switch';

// Import PropType
import PropTypes from 'prop-types';

class MaterialDesignSwitch extends Component {
  constructor () {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (checked) {
    this.setState({ checked });
    console.log('jfjfjfjf');
    this.props.onChange(checked);
  }

  render () {
    return (
        <div className="example">
          <label htmlFor="material-switch">
            <Switch
              checked={this.state.checked}
              onChange={this.handleChange}
              onColor="#86d3ff"
              onHandleColor="#2693e6"
              handleDiameter={30}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={20}
              width={48}
              className="react-switch"
              id="material-switch"
            />
          </label>
        </div>
    );
  }
}

MaterialDesignSwitch.propTypes = {
  onChange: PropTypes.func.isRequired
};

function ToggleButton ({ onToggle, selection }) {
  return (
        <div>
            <MaterialDesignSwitch
                onChange={() => onToggle()}
                checked={selection === 'multiple'}
            />
        </div>
  );
}

ToggleButton.propTypes = {
  onToggle: PropTypes.func.isRequired,
  selection: PropTypes.string.isRequired
};

export default ToggleButton;
