import React from 'react';

export class Post extends React.Component {
    constructor(props) {
      super();
    }

    render() {
        return <div className="box box-primary">
        <h3 style={{paddingLeft: 20}} class="box-title">{this.props.info.title}</h3>
        <div className="box-body chat" id="chat-box"></div>
  <div className="item">
    <span    />
    <p className="message">
      {this.props.info.text}
    </p>
    <div className="attachment">
      <img style={{width: '60%', height: '60%'}} src={this.props.info.image} alt=""/>
    </div>
  </div>
</div>
      // </div>;
    }
}