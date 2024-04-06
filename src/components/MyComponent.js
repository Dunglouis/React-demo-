
import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "dung",
        age: 21,
        address: "Thanh Hoa",
    };

    handle(event) {
        console.log("done click");
        console.log(event.target);
    }
    render() {
        return (
            <div>
                fuck you
                {Math.random()}
                toi ten la: {this.state.name}
                tuoi: {this.state.age}
                <button onClick={this.handle}>click me</button>
            </div>
        );
    }
}

export default MyComponent;