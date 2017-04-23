import React, { Component } from "react" ;
import uuid from "uuid" ;
import helpers from "./helpers.js" ;
import EditableTimerList from "./EditableTimerList.js" ;
import ToggleableTimerForm from "./ToggleableTimerForm.js" ;
import 'semantic-ui-css/semantic.css' ;


class TimersDashboard extends Component {

    constructor(props) {

        super(props);

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

        this.handleFormSubmit = this.handleFormSubmit.bind(this) ;

    };


    handleFormSubmit = (timer, timerForm = null) => {
        if(timer) {
            if(this.validateTimer(timer)) {
                const t = helpers.newTimer(timer);
                this.setState({
                    timers: this.state.timers.concat(t),
                });
                if(timerForm)
                    timerForm.handleFormClose();
            } else
                console.log('[App.handleFormSubmit] ERROR: Wrong input data') ;
        } else
            console.log('[App.handleFormSubmit] ERROR: timer null') ;
    } ;


    validateTimer = (timer) => {
        return (timer.title && timer.project);
    };


    render() {
        return (
            <div id="main" className="ui main">
                <h1 className="ui dividing centered header">Timers</h1>
                <div className='ui one column centered grid'>
                    <div className='column'>
                        <EditableTimerList
                            timers={this.state.timers}
                        />
                        <ToggleableTimerForm
                            onFormSubmit={this.handleFormSubmit}/>
                    </div>
                </div>
            </div>
        );
    }
}


export default TimersDashboard;
