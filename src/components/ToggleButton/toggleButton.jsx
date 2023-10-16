import { Component } from "react";
import Switch from 'react-switch'


class MaterialDesignSwitch extends Component {
    constructor() {
      super();
      this.state = { checked: false };
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(checked) {
      this.setState({ checked });
      console.log('jfjfjfjf')
      this.props.onChange(checked);

    }
  
    render() {
      return (
        <div className="example">
          <h2>Choisir une ou plusieurs nuits</h2>
          <label htmlFor="material-switch">
            <span>Une nuit   </span>
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
          <span>   Plusieurs nuits</span>
        </div>
      )
    }
}

function ToggleButton({onToggle, selection}) {

      

    return (
        <div>
            <MaterialDesignSwitch
                onChange={() => onToggle()}
                checked={selection === 'multiple'}
            />
        </div>
    )
  }
  
  export default ToggleButton