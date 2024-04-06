
import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "dung",
        age: 21,
        address: "Thanh Hoa",
    };
    render() {
        return (
            <div>
                fuck you
                {Math.random()}
                toi ten la: {this.state.name}
                tuoi: {this.state.age}
            </div>
        );
    }
}

export default MyComponent;