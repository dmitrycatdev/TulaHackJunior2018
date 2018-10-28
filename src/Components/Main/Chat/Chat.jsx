import React from 'react';
import { TopMenu } from '../TopMenu';
import { LeftMenu } from '../LeftMenu';
import AuthService from '../../Login/AuthService';

export class Chat extends React.Component {
    constructor() {
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
                //  isLoaded: true,
                 user: res
             });
         })
     }
    render() {
        return <div>
                <div className="wrapper"></div>
                <TopMenu user={this.state.user} />
                <LeftMenu user={this.state.user} />
                <div className="content-wrapper">
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
                    Раздел в разработке
                </div>
            </div>
        </div>
    }
}