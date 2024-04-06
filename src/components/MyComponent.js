
import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "dung",
        age: 21,
        address: "Thanh Hoa",
    };

    handle = (event) => {
        console.log("done click");
        console.log(this.handle(event));
        this.setState({
            name: "dung",
            age: Math.floor(Math.random() * 100 + 1),
        })
    }

    handleOnchange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div>
                toi ten la: {this.state.name}
                <br />
                tuoi: {this.state.age}
                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <input type="text" onChange={(event) => { this.handleOnchange(event) }} />
                    <button>submit</button>
                </form>

            </div>
        );
    }
}

export default MyComponent;