import React, { Component } from "react" ;
//import helpers from "./helpers" ;
import EditableTimer from "./EditableTimer" ;


class EditableTimerList extends Component {

    render() {

        const timers = this.props.timers.map((timer) => {
            return (
                <EditableTimer
                    key={timer.id}
                    id={timer.id}
                    title={timer.title}
                    project={timer.project}
                    elapsed={timer.elapsed}
                    runningSince={timer.runningSince}
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

export default EditableTimerList ;
