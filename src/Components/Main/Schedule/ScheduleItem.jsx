import React from 'react';

export class ScheduleItem extends React.Component {
    constructor(props) {
        super();

    }

    render() {
        return <section className="col-lg-4">
        <div className="box">
  <div className="box-header">
    <h3 className="box-title">{this.props.day}</h3>
  </div>
  {/* /.box-header */}
  <div className="box-body no-padding">
    <table className="table table-striped">
      <tbody><tr>
          <th style={{width: 10}}>#</th>
          <th>Время</th>
          <th>Предмет</th>
        </tr>
        <tr>
          <td>1.</td>
          <td>
               с {this.props.info.startTime} <br/>
               до {this.props.info.endTime}
          </td>
          <td>{this.props.info.title}</td>
        </tr>
        <tr>
          <td>2.</td>
          <td>
               с {this.props.info.startTime} <br/>
               до {this.props.info.endTime}
          </td>
          <td>{this.props.info.title}</td>
        </tr>
        <tr>
          <td>3.</td>
          <td>
               с {this.props.info.startTime} <br/>
               до {this.props.info.endTime}
          </td>
          <td>{this.props.info.title}</td>
        </tr>
      </tbody></table>
  </div>
  {/* /.box-body */}
</div>

        </section>
    }

}