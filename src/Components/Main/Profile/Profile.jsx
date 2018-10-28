import React from 'react';
import { TopMenu } from '../TopMenu';
import { LeftMenu } from '../LeftMenu';
import AuthService from '../../Login/AuthService';
import { Circle } from 'react-preloaders';

export class Profile extends React.Component {
    constructor(props) {
        super();
        this.state = {
            isLoaded: false,
            user: null
        }
        this.Auth = new AuthService();
    }
    componentDidMount() {
        this.Auth.fetch("http://tester1.evgenytk.ru/api/auth/me", 'get')
       .then(res => 
         {
             this.setState({
                 isLoaded: true,
                 user: res
             });
         })
     }
    render() {
        console.log(this.state.user);
        if (!this.state.isLoaded) {
            return <Circle
                    color={"#fe8200"}
                    bgColor={"#fff"}
                    time={140} />
        }
        return <div>
            <div className="wrapper"></div>
            <TopMenu user={this.state.user} />
            <LeftMenu user={this.state.user} />
            <div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <h1>
    Профиль
    </h1>
    
  </section>
  {/* Main content */}
  <section className="content">
    <div className="row">
      <div className="col-md-3">
        {/* Profile Image */}
        <div className="box box-primary">
          <div className="box-body box-profile">
            <img className="profile-user-img img-responsive img-circle" src={this.state.user.avatar} alt="User profile picture" />
            <h3 className="profile-username text-center">{this.state.user.last_name + ' ' + this.state.user.first_name}</h3>
            <p className="text-muted text-center">ТулГУ, ИПМКН</p>
            
            {/* <a href="#" className="btn btn-primary btn-block"><b>Отчислиться</b></a> */}
          </div>
          {/* /.box-body */}
        </div>
        {/* /.box */}
        {/* About Me Box */}
        <div className="box box-primary">
          <div className="box-header with-border">
            <h3 className="box-title">Обо мне
            </h3>
          </div>
          {/* /.box-header */}
          <div className="box-body">
            <strong><i className="fa fa-book margin-r-5" />Образование</strong>
            <p className="text-muted">
            ТулГУ, ИПМКН <br/> Прикладная информатика <br/> гр. 228061
            </p>
            <hr />
            <strong><i className="fa fa-map-marker margin-r-5" /> Город</strong>
            <p className="text-muted">Тула</p>
            <hr />
            <strong><i className="fa fa-file-text-o margin-r-5" /> Прочее</strong>
            <p>Обожаю котиков и программировать</p>
          </div>
          {/* /.box-body */}
        </div>
        {/* /.box */}
      </div>
      {/* /.col */}
      <div className="col-md-9">
        <div className="nav-tabs-custom">
          <ul className="nav nav-tabs">
            <li className="active"><a href="#stat" data-toggle="tab">Статистика</a></li>
            <li ><a href="#settings" data-toggle="tab">Настройки</a></li>
          </ul>
          <div className="tab-content container">
          <div className="tab-pane active" id="stat">
            <div className="col-md-7 col-sm-6 col-xs-12">
                <div className="info-box bg-green">
                    <span className="info-box-icon">
                    <i className="fa fa-thumbs-o-up" />
                    </span>
                    <div className="info-box-content">
                    <span className="info-box-text">Отлично</span>
                    <span className="info-box-number"></span>
                    <div className="progress">
                        <div className="progress-bar" style={{ width: "70%" }} />
                    </div>
                    <span className="progress-description">
                        Успеваемость 90% 
                    </span>
                    </div>
                </div>
                </div>
                <div className="col-md-7 col-sm-6 col-xs-12">
                    <div className="info-box bg-yellow">
                        <span className="info-box-icon">
                        <i className="fa fa-calendar" />
                        </span>
                        <div className="info-box-content">
                        <span className="info-box-text"></span>
                        <span className="info-box-number">Календарь посещений</span>
                        
                        
                        
                        </div>
                    </div>
                    </div>
                <div className="col-lg-7">
                <div className="small-box bg-yellow">
                    <div className="inner">
                    <h3>
                        53<sup style={{ fontSize: 20 }}>%</sup>
                    </h3>
                    <p>Посещаемость</p>
                    </div>
                    <div className="icon">
                    <i className="ion ion-stats-bars" />
                    </div>
                    <a href="javascript:void(0);" class="small-box-footer">
              Детальная информация <i class="fa fa-arrow-circle-right"></i>
            </a>
                </div>
                </div>
            </div>
            <div className="tab-pane" id="settings">
              <form className="form-horizontal">
                <div className="form-group">
                  <label htmlFor="inputName" className="col-sm-2 control-label">Name</label>
                  <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputName" placeholder="Name" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputEmail" className="col-sm-2 control-label">Email</label>
                  <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputName" className="col-sm-2 control-label">Name</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputName" placeholder="Name" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputExperience" className="col-sm-2 control-label">Experience</label>
                  <div className="col-sm-10">
                    <textarea className="form-control" id="inputExperience" placeholder="Experience" defaultValue={""} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputSkills" className="col-sm-2 control-label">Skills</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputSkills" placeholder="Skills" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" /> I agree to the <a href="#">terms and conditions</a>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-danger">Submit</button>
                  </div>
                </div>
              </form>
            </div>
            {/* /.tab-pane */}
          </div>
          {/* /.tab-content */}
        </div>
        {/* /.nav-tabs-custom */}
      </div>
      {/* /.col */}
    </div>
    {/* /.row */}
  </section>
  {/* /.content */}
</div>

    </div>;
    }
}
const posts = [1,2,3,4];