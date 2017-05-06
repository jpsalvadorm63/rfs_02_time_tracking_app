import React, {Component} from "react" ;
import TimerForm from "./timer_form.js" ;


class TimerNew extends Component {

    constructor(props) {
        super(props);
        this.state = { isOpen: false };
    }

    message = (res) => {
        if(res) {
            this.setState({isOpen: !res.ok}) ;
        }
    };

    componentDidMount = () => {
        if(this.props.onMount)
            this.props.onMount(this);
    };

    componentWillUnmount = () => {
        if(this.props.onMount)
            this.props.onMount(null);
    };

    formOpen = () => {
        this.setState({ isOpen: true });
    };

    formCreate = (timer) => {
        if(this.props.onFormSubmit) {
            this.props.onFormSubmit(timer);
        }
    };

    formCancel = () => { this.formClose() ; }

    formClose = () => { this.setState({ isOpen: false }); };

    render() {
        if (this.state.isOpen) {
            return (
                <TimerForm
                    onFormSubmit={this.formCreate}
                    onFormCancel={this.formCancel}
                />
            );
        } else {
            return (
                <div className='ui basic content center aligned segment'>
                    <button
                        className='ui basic button icon'
                        onClick={this.formOpen} >
                        <i className='plus icon' />
                    </button>
                </div>
            );
        }
    }
}


export default TimerNew ;
