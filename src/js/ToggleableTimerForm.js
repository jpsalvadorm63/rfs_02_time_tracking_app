import React, {Component} from "react" ;
import TimerForm from "./TimerForm" ;


class ToggleableTimerForm extends Component {

    constructor(props) {
        super(props);
        this.state = { isOpen: false };

        this.handleFormOpen = this.handleFormOpen.bind(this) ;
        this.handleFormSubmit =this.handleFormSubmit.bind(this) ;
        this.handleFormClose = this.handleFormClose.bind(this) ;
    }

    handleFormOpen = () => {
        if(this.props.onFormSubmit) {
            this.setState({ isOpen: true });
        } else {
            console.log("INTERNAL ERROR: onFormSubmit property has non been defined !") ;
        }
    };

    handleFormSubmit = (timer) => {
        if(this.props.onFormSubmit) {
            this.props.onFormSubmit(timer, this);
        } else {
            console.log("INTERNAL ERROR: onFormSubmit property has non been defined !") ;
        }
    };

    handleFormClose = () => {
        this.setState({ isOpen: false });
    };

    render() {
        if (this.state.isOpen) {
            return (
                <TimerForm
                    onFormSubmit={this.handleFormSubmit}
                    onFormClose={this.handleFormClose}
                />
            );
        } else {
            return (
                <div className='ui basic content center aligned segment'>
                    <button
                        className='ui basic button icon'
                        onClick={this.handleFormOpen} >
                        <i className='plus icon' />
                    </button>
                </div>
            );
        }
    }
}


export default ToggleableTimerForm ;
