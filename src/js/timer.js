import React, { Component } from "react" ;
import helpers from "./helpers" ;

class Timer extends Component {

    componentDidMount = () => {
        this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 500);
    };

    componentWillUnmount = () => {
        clearInterval(this.forceUpdateInterval);
    };

    startClick = () => {
        this.props.onStartTimer(this.props.id);
    };

    stopClick = () => {
        this.props.onStopTimer(this.props.id);
    };

    handleTrashClick = () => {
        this.props.onTrashClick(this.props.id);
    };

    render() {

        const elapsedString = helpers.renderElapsedString(
            this.props.elapsed, this.props.runningSince
        );

        return (
            <div className='ui centered card'>
                <div className='content'>
                    <div className='header'>
                        {this.props.title}
                    </div>
                    <div className='meta'>
                        {this.props.project}
                    </div>
                    <div className='center aligned description'>
                        <h2>
                            {elapsedString}
                        </h2>
                    </div>
                    <div className='extra content'>
                        <span
                            className='right floated edit icon'
                            onClick={this.props.onEditClick}>
                            <i className='edit icon' />
                        </span>
                        <span
                            className='right floated trash icon'
                            onClick={this.props.onDeleteClick}>
                            <i className='trash icon' />
                        </span>
                    </div>
                </div>
                <TimerActionButton
                    timerIsRunning={!!this.props.runningSince}
                    onStartClick={this.startClick}
                    onStopClick={this.stopClick}
                />
            </div>
        );
    }
}


class TimerActionButton extends Component {

    render() {
        const stopText = "Stop" ;
        const startText = "Start" ;
        if (this.props.timerIsRunning) {
            return (
                <div
                    className='ui bottom attached red basic button'
                    onClick={this.props.onStopClick}
                >
                    {stopText}
                </div>
            );
        } else {
            return (
                <div
                    className='ui bottom attached green basic button'
                    onClick={this.props.onStartClick}
                >
                    {startText}
                </div>
            );
        }
    }
}


export default Timer ;
