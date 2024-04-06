
import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "dung",
        age: 21,
        address: "Thanh Hoa",
    };

    handle = (event) => {
        console.log("done click");
        console.log(this.state.name);
        this.setState({
            name: "Pham Dung",
            age: Math.floor(Math.random() * 100 + 1),
        })
    }
    render() {
        return (
            <div>
                fuck you
                {Math.random()}
                toi ten la: {this.state.name}
                tuoi: {this.state.age}
                <button onClick={(event) => { this.handle(event) }}>click me</button>
            </div>
        );
    }
}

export default MyComponent;