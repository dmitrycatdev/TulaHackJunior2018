import React from 'react';

export class Post extends React.Component {
    constructor(props) {
      super();
    }

    render() {
        return <div className="box box-primary">
        
        <div className="box-body chat" id="chat-box">
  <div className="item">
    <img
      src="https://yt3.ggpht.com/-cnRYyckfEIc/AAAAAAAAAAI/AAAAAAAAAAA/9annYfSQ3WM/s240-c-k-no-mo-rj-c0xffffff/photo.jpg"
      alt="user image"
      className="online"
    />
    <p className="message">
      <a href="#" className="name">
        <small className="text-muted pull-right">
          <i className="fa fa-clock-o" /> 2:15
        </small>Зубенко Михаил Петрович
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