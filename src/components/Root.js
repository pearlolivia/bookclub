import React, {Component} from 'react';
import {Header} from "./Header";
import {Footer} from "./Footer";

export default class Root extends Component {
    render() {
        return(
            <div>
                <div>
                    <Header/>
                </div>
                <hr />
                <div>
                    {this.props.children}
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        )
    }
}
