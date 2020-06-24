import React from "react";

import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formSource: this.props.formSrc,
    };
  }

  render() {
    return (
      <div className="Form__iframe-Container">
        <iframe
          className="iframe__browser"
          title="Form or Video?"
          src={this.props.formSrc}
          height="368.55"
          width="655.2"
          frameborder="0"
          scrolling="no"
          allowFullScreen
        ></iframe>
        <iframe
          className="iframe__responsive"
          title="Form or Video?"
          src={this.props.formSrc}
          frameborder="0"
          scrolling="yes"
          allowFullScreen
          style={{width:"100%", height:"100%"}}
        ></iframe>
        <script src="//tfaforms.com/js/iframe_resize_helper.js"></script>
      </div>
    );
  }
}

export default Form;
