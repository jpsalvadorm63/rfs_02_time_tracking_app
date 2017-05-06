import React, { Component } from "react" ;
import uuid from "uuid" ;
import helpers from "./helpers" ;
import EditableTimer from "./editable_timer.js" ;


class TimerList extends Component {

    constructor(props) {
        super(props) ;
        this.state = {
            timers: [
                {   id: uuid.v4(),
                    title: 'Practice squat',
                    project: 'Gym Chores',
                    elapsed: 5456099,
                    runningSince: Date.now(),
                },
                {   id: uuid.v4(),
                    title: 'Bake squash',
                    project: 'Kitchen Chores',
                    elapsed: 1273998,
                    runningSince: null,
                },
            ]
        };
    };

    hello = () => { console.log("hello from [TimerList]"); };

    message = (msg) => {if(msg) {} };

    componentDidMount = () => {
        if(this.props.onMount)
            this.props.onMount(this);
    };

    componentWillUnmount = () => {
        if(this.props.onMount)
            this.props.onMount(null);
    };

    timerAdd2list = (timer) => {

        let ok = false ;
        const from = 'TimerList.addTimer2list' ;
        let msg = null ;

        if(helpers.validateTimer(timer)) {
            const t = helpers.newTimer(timer);
            this.setState({
                timers: [...this.state.timers, t],
            });
            ok = true ;
            msg = 'TIMER INSERTED IN LIST !' ;
        } else
            msg = 'WRONG INPUT DATA';

        const result = {
            ok: ok,
            from: from,
            data: timer,
            msg: msg,
        } ;

        return result ;
    } ;

    timerUpdate = (timer) => {
        this.setState({
            timers: this.state.timers.map((t) => {
                if (t.id === timer.id) {
                    return Object.assign({}, t, {
                        title: timer.title,
                        project: timer.project,
                    });
                } else {
                    return t;
                }
            }),
        });
    } ;

    timerDelete = (timer) => {
        if(timer) {
            this.setState({
                timers: this.state.timers.filter((t => t.id !== timer.id)),
            });
        }
    } ;

    startTimer = (timerId) => {
        const now = Date.now();

        this.setState({
            timers: this.state.timers.map((timer) => {
                if (timer.id === timerId) {
                    return Object.assign({}, timer, { runningSince: now });
                } else {
                    return timer;
                }
            }),
        });
    };

    stopTimer = (timerId) => {
        const now = Date.now();

        this.setState({
            timers: this.state.timers.map((timer) => {
                if (timer.id === timerId) {
                    const lastElapsed = now - timer.runningSince;
                    return Object.assign({}, timer, {
                        elapsed: timer.elapsed + lastElapsed,
                        runningSince: null,
                    });
                } else {
                    return timer;
                }
            }),
        });
    };


    render() {
        const timers = this.state.timers.map((timer) => {
            return (
                <EditableTimer
                    key={timer.id}
                    id={timer.id}
                    title={timer.title}
                    project={timer.project}
                    elapsed={timer.elapsed}
                    runningSince={timer.runningSince}
                    onFormSubmit={this.timerUpdate}
                    onFormDelete={this.timerDelete}
                    onStartTimer={this.startTimer}
                    onStopTimer={this.stopTimer}
                />
            );
        });

        return (
            <div id='timers'>
                {timers}
            </div>
        );
    }
}


export default TimerList ;
