import React, {Component} from 'react'

class Counter extends Component {

    state = {
        value: 0
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.value != this.props.value) {
            this.setState((state, props) => ({
                value: props.value
            }));
        }
    }

    render() {
        const {value} = this.state;
        return (
            <div>
                <button type={"button"} onClick={this.handleDecrease}>-</button>
                <input type={"number"} value={value} onChange={this.handleChange}/>
                <button type={"button"} onClick={this.handleIncrease}>+</button>
            </div>
        )
    }

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({
            value
        })
        this.props.countUpdated(value);
    }

    handleDecrease = () => {
        const count = this.state.value - 1;
        this.setState({
            value: count
        })

        this.props.countUpdated(count);
    }

    handleIncrease = () => {
        const count = this.state.value + 1;
        this.setState({
            value: count
        })
        this.props.countUpdated(count);
    }
}

export default Counter
