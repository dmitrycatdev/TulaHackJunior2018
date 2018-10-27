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
            user: null
        }
        this.Auth = new AuthService();
    }

    render() {
        // if (!this.state.isLoaded) {
        //     return <Circle
        //             color={"#fe8200"}
        //             bgColor={"#fff"}
        //             time={140} />
        // }
        return <div>
            <div className="wrapper"></div>
            <TopMenu user={this.props.user} />
            <LeftMenu user={this.props.user} />
            <div className="content-wrapper">
            <section className="content-header">
                <h1>
                     Новости
                </h1>
            </section>
            <section className="content">
                <div className="row">
                <section className="col-lg-10 connectedSortable">
                {posts.map((post, index) => {
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