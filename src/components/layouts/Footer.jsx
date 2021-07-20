import React from "react";

const RED = "#ff0000";
const BLUE = "#0000ff";
const GRAY = "#678c89";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  submitThemeColor(color) {
    this.props.saveColorTheme(color);
  }

  render() {
    return (
      <div className="footer">
        <div className="vertical-center">
          <span>Choose Theme</span>
          <button
            className="dot dot-red"
            onClick={() => this.submitThemeColor(RED)}
          />
          <button
            className="dot dot-blue"
            onClick={() => this.submitThemeColor(BLUE)}
          />
          <button
            className="dot dot-gray"
            onClick={() => this.submitThemeColor(GRAY)}
          />
        </div>
      </div>
    );
  }
}

export default Footer;
