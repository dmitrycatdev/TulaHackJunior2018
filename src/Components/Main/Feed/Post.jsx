import React from 'react';

export class Post extends React.Component {
    constructor(props) {
      super();
    }

    render() {
        return <div className="box box-primary">
        <div className="box-header">
          <h3 className="box-title">Пост {this.props.info}</h3>
        </div>
        <div className="box-body chat" id="chat-box">
  <div className="item">
    <img
      src="https://adminlte.io/themes/AdminLTE/dist/img/user4-128x128.jpg"
      alt="user image"
      className="online"
    />
    <p className="message">
      <a href="#" className="name">
        <small className="text-muted pull-right">
          <i className="fa fa-clock-o" /> 2:15
        </small>Mike Doe
      </a>Лабораторные работы нужно сдать вовремя! Отчеты по гостам!
    </p>
    <div className="attachment">
      <h4>Вложения:</h4>
      <p className="filename">Методичка.pdf</p>
      <div className="pull-right">
        <button
          type="button"
          className="btn btn-primary btn-sm btn-flat">
          Посмотреть
        </button>
      </div>
    </div>
  </div>
</div>
      </div>;
    }
}