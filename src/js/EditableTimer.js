import React, { Component} from "react" ;
import TimerForm from "./TimerForm" ;
import Timer from "./Timer" ;


class EditableTimer extends Component {

    constructor(props) {
        super(props);
        this.state = { editFormOpen: false };
    }

    handleFormSubmit = () => {
        console.log("- EditableTimer.handleSubmit4Update -");
    } ;

    handleFormClose = () => {
        this.setState({editFormOpen : false});
    } ;

    render() {
        if (this.state.editFormOpen) {
            return (
                <TimerForm
                    key={this.props.id}
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    onFormSubmit={this.handleFormSubmit}
                    onFormClose={this.handleFormClose}
                />
            );
        } else {
            return (
                <Timer
                    key={this.props.id}
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    elapsed={this.props.elapsed}
                    runningSince={this.props.runningSince}
                />
            );
        }
    }
} ;


export default EditableTimer ;
