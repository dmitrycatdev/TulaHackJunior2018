import React from 'react';
import { TopMenu } from '../TopMenu';
import { LeftMenu } from '../LeftMenu';
import AuthService from '../../Login/AuthService';
import { Circle } from 'react-preloaders';
import { ScheduleItem } from './ScheduleItem';

export class Schedule extends React.Component {
    constructor(props) {
        super();
        this.state = {
            schedules: null,
            isLoaded: false,
            user: null,
            day: {
                id: 0,
                name: "Понедельник"
            },
            currendDaySchd: null
        }
        this.Auth = new AuthService();
    }

    componentDidMount() {
       this.Auth.fetch("http://tester1.evgenytk.ru/api/auth/schedules", 'get')
      .then(res => 
        {
            this.setState({
                isLoaded: true,
                schedules: Object.keys(res).map((key) => { return res[key]; }),
                currendDaySchd: Object.keys(res).map((key) => { return res[key]; })[0]
            });
            console.log(this.state.schedules);
        })

        this.Auth.fetch("http://tester1.evgenytk.ru/api/auth/me", 'get')
       .then(res => 
         {
             this.setState({
                 isLoaded: true,
                 user: res
             });
         })
    }

    getDaySchedule = (dayId, dayName) => {
        this.setState({
            day: {
                id:dayId,
                name: dayName
            },
            currendDaySchd: this.state.schedules[dayId]
        });
    }

    render() {
        if (!this.state.isLoaded || !this.state.schedules) {
            return <div className="wrapper">
                <div className="content-wrapper">
                <Circle
                    color={"#fe8200"}
                    bgColor={"#fff"}
                    time={14000000} />
                </div>
            </div>
        }
        console.log(schedules);
        return <div>
            <div className="wrapper"></div>
            <TopMenu />
            <LeftMenu user={this.state.user}/>
            <div className="content-wrapper">
            <section className="content-header schedule-nav" style={
                {
                    display: "flex",
                    justifyContent: "space-around"
                }}>
                 <div className={this.state.day.id == 0 ?'active' : ''}
                    onClick={()=>{this.getDaySchedule(0,'Понедельник')}}>Понедельник</div>
                 <div className={this.state.day.id == 1 ?'active' : ''}
                    onClick={()=>{this.getDaySchedule(1,'Вторник')}}>Вторник</div>
                 <div className={this.state.day.id == 2 ?'active' : ''}
                    onClick={()=>{this.getDaySchedule(2,'Среда')}}>Среда</div>
                 <div className={this.state.day.id == 3 ?'active' : ''}
                    onClick={()=>{this.getDaySchedule(3,'Четверг')}}>Четверг</div>
                 <div className={this.state.day.id == 4 ?'active' : ''}
                    onClick={()=>{this.getDaySchedule(4,'Пятница')}}>Пятница</div>
            </section>
            <section className="content" style={
                {
                    display: "flex",
                    justifyContent: "space-around"
                }}>
                <div>{''}</div>
                    <ScheduleItem day={this.state.day.name} data={this.state.currendDaySchd} />
                <div>{''}</div>
            </section>
        </div>
    </div>;
    }
}
const schedules = [
    [   'Понедельник',
        {
            title: "Базы данных",
            startTime: '10:00',
            endTime: '11:30'
        },
        {
            id: 2,
            title: "Веб-программирование",
            startTime: '12:00',
            endTime: '13:30'
        },
        {
            title: "Компьютерна графика",
            startTime: '14:00',
            endTime: '15:30'
        }
    ],
    [ 'Вторник',
        {
            id: 1,
            title: "Базы данных",
            startTime: '10:00',
            endTime: '11:30'
        },
        {
            day: 'Понедельник',
            id: 2,
            title: "Веб-программирование",
            startTime: '12:00',
            endTime: '13:30'
        },
        {
            day: 'Понедельник',
            id: 2,
            title: "Компьютерна графика",
            startTime: '14:00',
            endTime: '15:30'
        }
    ],
    [

        'Среда',
        {
            day: 'Понедельник',
            id: 1,
            title: "Базы данных",
            startTime: '10:00',
            endTime: '11:30'
        },
        {
            id: 2,
            title: "Веб-программирование",
            startTime: '12:00',
            endTime: '13:30'
        },
        {
            id: 2,
            title: "Компьютерна графика",
            startTime: '14:00',
            endTime: '15:30'
        }
    ],
    [
        "Четверг",
        {
            id: 1,
            title: "Базы данных",
            startTime: '10:00',
            endTime: '11:30'
        },
        {
            id: 2,
            title: "Веб-программирование",
            startTime: '12:00',
            endTime: '13:30'
        },
        {
            id: 2,
            title: "Компьютерна графика",
            startTime: '14:00',
            endTime: '15:30'
        }
    ],
    [
        "Пятница",
        {
            id: 1,
            title: "Базы данных",
            startTime: '10:00',
            endTime: '11:30'
        },
        {
            id: 2,
            title: "Веб-программирование",
            startTime: '12:00',
            endTime: '13:30'
        },
        {
            id: 2,
            title: "Компьютерна графика",
            startTime: '14:00',
            endTime: '15:30'
        }
    ]

];