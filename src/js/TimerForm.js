import React, {Component} from "react" ;


class TimerForm extends Component {

    constructor(props) {

        super(props) ;

        this.state = {
            id : props.id,
            title : props.title,
            project : props.project,
            elapsed : props.elapsed,
            runningSince : props.runningSince,
        } ;

        this.handleChange = this.handleChange.bind(this) ;
        this.handleSubmit = this.handleSubmit.bind(this) ;
        this.handleCancel = this.handleCancel.bind(this) ;
    };

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });

    } ;

    handleSubmit = () => {
        if(this.props.onFormSubmit) {
            this.props.onFormSubmit({
                id: this.props.id,
                title: this.state.title,
                project: this.state.project,
            });
        } else {
            console.log('Err: onFormSubmit not implemented') ;
        }
    } ;

    handleCancel = () => {
        console.log("- TimerForm.handleCancel -") ;
        if(this.props.onFormClose)
            this.props.onFormClose();
        else
            console.log('Err: onFormClose not implemented') ;
    };

    render() {

        const submitText = this.props.title ? 'Update' : 'Create';
        const cancelText = 'Cancel' ;

        return (
            <div className='ui centered card'>
                <div className='content'>
                    <div className='ui form'>
                        <div className='field'>
                            <label>Title</label>
                            <input name="title" type='text'
                                   defaultValue={this.state.title}
                                   onChange={this.handleChange}/>
                        </div>
                        <div className='field'>
                            <label>Project</label>
                            <input name="project" type='text'
                                   defaultValue={this.state.project}
                                   onChange={this.handleChange}/>
                        </div>
                        <div className='ui two bottom attached buttons'>
                            <button
                                className='ui basic blue button'
                                onClick={this.handleSubmit}>
                                {submitText}
                            </button>
                            <button
                                className='ui basic red button'
                                onClick={this.handleCancel}>
                                {cancelText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TimerForm ;
