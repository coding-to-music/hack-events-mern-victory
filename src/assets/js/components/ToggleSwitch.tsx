import React from 'react';
import UUID from 'node-uuid';

interface ToggleSwitchProps {
  checked: boolean;
  onChange?: (value: any) => void;
  className?: string;
  disabled?: boolean;
}

interface ToggleSwitchState {
  id: string;
}

class ToggleSwitch extends React.Component<ToggleSwitchProps, ToggleSwitchState> {
  state: Readonly<ToggleSwitchState> = {
    id: UUID.v4(),
  };

  /**
   * Toggles the checkbox value
   */
  toggle = () => {
    const newState = !this.props.checked;

    if (this.props.onChange) {
      this.props.onChange(newState);
    }
  }

  render() {
    const {checked, disabled} = this.props;

    return (
      <div className={`switch ${this.props.className}`} >
        <input
          id={this.state.id}
          className="toggle-switch toggle-switch-round-flat"
          type="checkbox"
          onChange={this.toggle}
          checked={checked}
          disabled={disabled}
        />
        <label htmlFor={this.state.id}/>
      </div>
    );
  }
}

export default ToggleSwitch;
