import React from "react";

export default class NewsDet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newInfo: []
    };
  }

  componentDidMount() {
    this.edit(this.props.data);
  }

  componentWillReceiveProps(props) {
    this.edit(props.data);
  }

  edit = data => {
    window.document.getElementById("edit").innerHTML = data.text;
  };

  render() {
    const { data } = this.props;
    return (
      <div style={{ padding: "0 180px" }} className="newsDetInfo">
        <p className="title">
          {data.title}
        </p>
        <div className="newsDetInfoContent" id="edit" />
      </div>
    );
  }
}
