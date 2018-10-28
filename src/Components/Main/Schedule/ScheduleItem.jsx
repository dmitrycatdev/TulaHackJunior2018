import React from 'react';
import { Circle } from 'react-preloaders';


export class ScheduleItem extends React.Component {
    constructor(props) {
        super();

    }

    render() {
        if (!this.props.data){
            return <section className="col-lg-10">
            <div className="box">
      <div className="box-header" style={{
          display:'flex',
          justifyContent: 'space-around'
      }}>
        <h3 className="box-title">{this.props.day}</h3>
      </div>
      <div className="box-body" style={
          {
            height: "100%",
            padding: "0",
            margin: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ccc",
            fontSize: '400%',
            paddingBottom: 50,
            paddingTop: 50
          }
      }>
        Нет данных
      </div>
    </div>
            </section>
        }
        return <section className="col-lg-10">
        <div className="box">
  <div className="box-header" style={{
      display:'flex',
      justifyContent: 'space-around'
  }}>
    <h3 className="box-title">{this.props.day}</h3>
  </div>
  {/* /.box-header */}
  <div className="box-body no-padding">
    <table className="table table-striped">
      <tbody><tr>
          <th style={{width: 10}}>#</th>
          <th>Время</th>
          <th>Предмет</th>
          <th>Преподаватель</th>
          <th>Кабинет</th>
        </tr>
        {this.props.data.map((les, index) => {
            return <LessonGrid key={index} data={les} index={index} />
        })}
      </tbody></table>
  </div>
</div>
        </section>
    }
}
class LessonGrid extends React.Component {
    constructor(props) {
        super();

    }
    getTime = date => {
        return (date.split(' ')[1].slice(0, -3))
    }
    render() {
        return <tr>
        <td>{this.props.index+1}</td>
        <td>
            {this.getTime(this.props.data.start_date)}
              -
            {this.getTime(this.props.data.end_date)  }
        </td>
        <td>{this.props.data.lesson.description}</td>
        <td>{this.props.data.lesson.teacher.last_name} {this.props.data.lesson.teacher.first_name}</td>
        <td>404</td>
      </tr>
    }
}