import React, { Component } from "react" ;
import EditableTimerList from "./EditableTimerList.js" ;
import ToggleableTimerForm from "./ToggleableTimerForm.js" ;
import uuid from "uuid" ;
import "semantic-ui-css/semantic.css" ;


class TimersDashboard extends Component {

    state = {
        timers: [
            {
                id: uuid.v4(),
                title: 'Practice squat',
                project: 'Gym Chores',

                elapsed: 5456099,
                runningSince: Date.now(),
            },
            {
                id: uuid.v4(),
                title: 'Bake squash',
                project: 'Kitchen Chores',
                elapsed: 1273998,
                runningSince: null,
            },
        ],
    };

    render() {
        return (
            <div id="main" className="main ui">
                <div className='ui one column centered grid'>
                    <h1 className="ui dividing centered header">Timers</h1>
                    <div className='column'>
                        <EditableTimerList />
                        <p>ToggleableTimerForm isOpen true</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TimersDashboard;
