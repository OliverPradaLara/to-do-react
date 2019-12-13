import React from "react"



class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.state = {
            value:""
        }
    }

    onSubmit(e) {
        e.preventDefault()
        console.log("onSubmit")
        console.log("this.props.addItem="+this.props.addItem) 

        console.log(this.state.value)

        this.props.addItem(this.state.value)
        this.setState ({
            value: ""
        })
    }
    onChange(e) {
        console.log(e.target.value)
        let value = e.target.value;
        this.setState(
            {...this.setState,value:value}
        )
    }

    render() {    
        return (
            <form ref="form" onSubmit={this.onSubmit}>
                <input type="text" id="task" onChange={this.onChange} value={this.state.value}></input>
            </form>
    )}
}

export default TodoForm