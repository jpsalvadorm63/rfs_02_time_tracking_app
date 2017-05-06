import React, { Component} from "react" ;
import helpers from "./helpers.js" ;
import TimerForm from "./timer_form.js" ;
import Timer from "./timer.js" ;


class EditableTimer extends Component {

    constructor(props) {
        super(props);
        this.state = { editFormOpen: false } ;
    }

    hello = () => {
        console.log("hello from [EditableTimer] ...") ;
    };

    message = (res) => {if(res) {
        const tof = !res.ok ;
        this.setState({ editFormOpen: tof });
    }};

    componentDidMount = () => {
        if(this.props.onMount)
            this.props.onMount(this);
    };

    componentWillUnmount = () => {
        if(this.props.onMount)
            this.props.onMount(null);
    };

    formEdit = () => {
        this.formOpen();
    };

    formOpen = () => {
        this.setState({ editFormOpen: true });
    };

    formUpdate = (timer) => {
        if(this.props.onFormSubmit) {
            if(helpers.validateTimer(timer)) {
                this.props.onFormSubmit(timer);
                this.formClose();
            } else {
                console.log("[EditableTimer.formSubmit] ERROR: No valid timer data");
            }
        }
    };

    formDelete = () => {
        if(this.props.onFormDelete) {
            this.props.onFormDelete({
                id:this.props.id,
                title:this.props.title,
                project:this.props.project
            });
        } else {
            console.log("[EditableTimer.formDelete] ERROR");
        }
    };

    formCancel = () => { this.formClose(); };

    formClose = () => {
        this.setState({editFormOpen : false});
    };

    render() {
        if (this.state.editFormOpen) {
            return (
                <TimerForm
                    key={this.props.id}
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    onFormSubmit={this.formUpdate}
                    onFormCancel={this.formCancel}
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
                    onEditClick={this.formEdit}
                    onDeleteClick={this.formDelete}
                    onStartTimer={this.props.onStartTimer}
                    onStopTimer={this.props.onStopTimer}
                />
            );
        }
    }
};


export default EditableTimer ;
