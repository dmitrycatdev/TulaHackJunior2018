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
            // isLoaded: false,
            user: null
        }
        this.Auth = new AuthService();
    }

    // componentDidMount() {
    //    this.Auth.fetch("http://tester1.evgenytk.ru/api/schedules", 'get')
    //   .then(res => 
    //     {
    //         this.setState({
    //             isLoaded: true,
    //             // schedules: res
    //         });
    //     })
    // }

    render() {
        // if (!this.state.isLoaded) {
        //     return <div className="wrapper">
        //         <div className="content-wrapper">
        //         <Circle
        //             color={"#fe8200"}
        //             bgColor={"#fff"}
        //             time={14000000} />
        //         </div>
        //     </div>
        // }
        console.log(schedules);
        return <div>
            <div className="wrapper"></div>
            <TopMenu />
            <LeftMenu user={this.state.user}/>
            <div className="content-wrapper">
            <section className="content-header">
                <h1>
                     Расписание
                </h1>
            </section>
            <section className="content">
                <div className="row">
                <section className="col-lg-10 connectedSortable">
                {schedules.map((item, index) => {
                    return <ScheduleItem key={index}  day={item[0]} info={item[1]} />;
                })}
                </section>
                </div>
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