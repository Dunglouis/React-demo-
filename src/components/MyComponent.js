
import React from "react";
import Userinfor from "./Userinfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {

    state = {
        listUser: [
            { id: "1", name: "Pham Dung3", age: 21 },
            { id: "2", name: "Pham Dung1", age: 20 },
            { id: "3", name: "Pham Dung2", age: 22 },
        ]

    }

    addUser = (userObj) => {
        console.log("done submit: ", userObj);
        this.setState({
            listUser: [userObj, ...this.state.listUser]
        })
    }
    render() {

        return (
            <div>
                <Userinfor addUser={this.addUser}></Userinfor>
                <DisplayInfor listUser={this.state.listUser} />
            </div>

        );
    }
}

export default MyComponent;