import React, {Component} from 'react'

class Counter extends Component {

    state = {
        value: 0
    }

    render() {
        const {value} = this.state;
        const {name} = this.props;
        return (
            <div>
                <h2>{this.props.name}</h2>
                <button type={"button"} onClick={this.handleDecrease}>-</button>
                <input type={"number"} value={value} onChange={this.handleChange}/>
                <button type={"button"} onClick={this.handleIncrease}>+</button>
            </div>
        )
    }

    handleChange = (event) => {
        const value = event.target.value
        this.setState({
            value
        })
    }

    handleDecrease = () => {
        this.setState({
            value: --this.state.value
        })
    }

    handleIncrease = () => {
        this.setState({
            value: ++this.state.value
        })
    }
}

Counter.defaultProps = {
    name: "Marjona"
}

export default Counter
