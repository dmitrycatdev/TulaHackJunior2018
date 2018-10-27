import React from 'react';
import { Link } from "react-router-dom";
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
              <img src="https://adminlte.io/themes/AdminLTE/dist/img/user4-128x128.jpg" className="img-circle" alt="User Image" />
            </div>
            <div className="pull-left info">
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
                <Link to={`/feed`}  activeClassName="active "><span>Новости</span></Link>
            </li> 
            <li className="treeview">
                <Link to={`/schedule`}  activeClassName="active "><span>Расписание</span></Link>
            </li> 
          </ul>
        </section>
        {/* /.sidebar */}
      </aside>;      
    }
}