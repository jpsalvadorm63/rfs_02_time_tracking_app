import React, { Component } from "react" ;
import TimerList from "./timer_list.js" ;
import TimerEntry from "./timer_new.js" ;
import 'semantic-ui-css/semantic.css' ;


class TimersDashboard extends Component {

    attachTimerList = (component) => {
        this.ref_TimerList = component ;
    } ;

    attachTimerNew = (component) => {
        this.ref_TimerNew = component ;
    } ;

    timerAdd2list = (timer) => {
        if(timer && this.ref_TimerList && this.ref_TimerNew) {
            this.ref_TimerNew.message(
                this.ref_TimerList.timerAdd2list(timer)
            ) ;
        }
    } ;

    render() {

        const timerList =
            <TimerList
                onMount={this.attachTimerList}
            /> ;

        const timerNew =
            <TimerEntry
                onFormSubmit={this.timerAdd2list}
                onMount={this.attachTimerNew}
            /> ;

        return (
            <div id="main" className="ui main">
                <h1 className="ui dividing centered header">Timers</h1>
                <div className="ui one column centered grid">
                    <div className="column">
                        {timerList}
                        {timerNew}
                    </div>
                </div>
            </div>
        );
    }
}

export default TimersDashboard;
