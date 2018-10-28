import React from 'react';
import { Link, NavLink } from "react-router-dom";
import AuthService from '../Login/AuthService';


export class LeftMenu extends React.Component {
    constructor(props) {
        super();
        
    }

    render() {
        // console.log(this.props.user && this.props.user.first_name);
        return <aside className="main-sidebar">
        <section className="sidebar">
          <div className="user-panel">
            <div className="pull-left image">
            <img src={this.props.user && this.props.user.avatar} className="img-circle" alt="User Image" />

              {/* <img src="https://adminlte.io/themes/AdminLTE/dist/img/user4-128x128.jpg" className="img-circle" alt="User Image" /> */}
            </div>
            <div className="pull-left info">
            <p> 
              {this.props.user && this.props.user.last_name + ' ' + this.props.user.first_name}
              </p>
              <span>гр. 228061</span>
            </div>
          </div>
          <form action="#" method="get" className="sidebar-form">
            <div className="input-group">
              <input type="text" name="q" className="form-control" placeholder="Поиск..." />
              <span className="input-group-btn">
                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search" />
                </button>
              </span>
            </div>
          </form>
          <ul className="sidebar-menu" data-widget="tree">
            <li className="treeview">
                <NavLink to={`/feed`}  activeClassName="active"><span>Новости</span></NavLink>
            </li> 
            <li className="treeview">
                <NavLink to={`/schedule`} ><span>Расписание</span></NavLink>
            </li> 
            <li className="treeview">
                <NavLink to={`/chat`} >
                  <span>Сообщения</span> 
                  <div className="pull-right">
                    <i className="fa fa-comments" style={{marginRight:40}}></i>
                  </div>
                </NavLink>
            </li> 
            <li className="treeview">
                <NavLink to={`/profile`} >
                  <span>Мой профиль</span> 
                  <div className="pull-right">
                    <i className="fa fa-pie-chart" style={{marginRight:40}}></i>
                  </div>
                </NavLink>
            </li> 
          </ul>
        </section>
        {/* /.sidebar */}
      </aside>;      
    }
}