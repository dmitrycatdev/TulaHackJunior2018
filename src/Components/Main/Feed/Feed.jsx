import React from 'react';
import { TopMenu } from '../TopMenu';
import { LeftMenu } from '../LeftMenu';
import AuthService from '../../Login/AuthService';
import { Circle } from 'react-preloaders';
import { Post } from './Post';

export class Feed extends React.Component {
    constructor(props) {
        super();
        this.state = {
            isLoaded: false,
            user: null,
            posts: null
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

         this.Auth.fetch("http://tester1.evgenytk.ru/api/auth/news", 'get')
         .then(res => 
           {
               this.setState({
                   isLoaded: true,
                   posts: Object.keys(res).map((key) => { return res[key] })
               });
           })
     }
    render() {
        console.log(this.state.posts)
        if (!this.state.isLoaded && !this.state.posts   ) {
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
            <section className="content-header">
                <h1>
                     Новости
                </h1>
            </section>
            <section className="content">
                <div className="row">
                <section className="col-lg-10 connectedSortable">
                {this.state.posts && this.state.posts.map((post, index) => {
                    return <Post key={index} info={post} />;
                })}
                </section>
                </div>
            </section>
        </div>
    </div>;
    }
}
const posts = [1,2,3,4];