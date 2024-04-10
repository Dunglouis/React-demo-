
import React, { useState } from "react";
import Userinfor from "./Userinfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {

//     state = {
//         listUser: [
//             { id: "1", name: "Pham Dung3", age: 21 },
//             { id: "2", name: "Pham Dung1", age: 20 },
//             { id: "3", name: "Pham Dung2", age: 22 },
//         ]

//     }

//     addUser = (userObj) => {
//         console.log("done submit: ", userObj);
//         this.setState({
//             listUser: [userObj, ...this.state.listUser]
//         })
//     }
//     DeleteUser = (userID) => {
//         let listUserClone = [...this.state.listUser]
//         listUserClone = listUserClone.filter(item => item.id !== userID);
//         this.setState({
//             listUser: listUserClone
//         })
//     }
//     render() {

//         return (
//             <div>
//                 <Userinfor addUser={this.addUser}></Userinfor>
//                 <DisplayInfor
//                     listUser={this.state.listUser}
//                     DeleteUser={this.DeleteUser}
//                 />
//             </div>

//         );
//     }
// }


const MyComponent = (props) => {

    const [listUser, setListUser] = useState(
        [
            { id: "1", name: "Pham Dung3", age: 21 },
            { id: "2", name: "Pham Dung1", age: 20 },
            { id: "3", name: "Pham Dung2", age: 22 },
        ]
    )

    const addUser = (userObj) => {
        setListUser([userObj, ...listUser])
        // this.setState({
        //     listUser: [userObj, ...this.state.listUser]
        // })
    }
    const DeleteUser = (userID) => {
        let listUserClone = listUser;
        listUserClone = listUserClone.filter(item => item.id !== userID);
        setListUser(listUserClone)
        // this.setState({
        //     listUser: listUserClone
        // })
    }

    return (
        <>
            <div>
                <Userinfor addUser={addUser}></Userinfor>
                <DisplayInfor
                    listUser={listUser}
                    DeleteUser={DeleteUser}
                />
            </div>
        </>
    )
}

export default MyComponent;