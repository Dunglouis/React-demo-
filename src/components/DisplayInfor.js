import React, { useEffect, useState } from "react";
import './DisplayInfor.scss';

// class DisplayInfor extends React.Component {
//     render() {
//         const { listUser } = this.props;
//         return (
//             <div className="display-infor-container">
//                 <img src={logo} />
//                 <div>
//                     <span onClick={() => { this.showList() }}>
//                         {this.state.isListUser === true ? "high list" : "show list"}
//                     </span>
//                 </div>
//                 {this.state.isListUser &&
//                     <div>
//                         {
//                             listUser.map((user) => {
//                                 console.log(user);
//                                 return (
//                                     <div>
//                                         <div key={user.id} className={user.age > 20 ? "red" : "green"}>
//                                             <div>My name: {user.name}</div>
//                                             <div>My age: {user.age}</div>
//                                         </div>
//                                         <button onClick={() => { this.props.DeleteUser(user.id) }}>Delete</button>
//                                     </div>
//                                 )
//                             })
//                         }
//                     </div>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {
    const { listUser } = props;
    const [isShowHighListUser, setShowHighListUser] = useState(true);
    const handleShowHighListUser = () => {
        setShowHighListUser(!isShowHighListUser);
    }

    useEffect(
        () => {
            if (listUser.length === 0) {
                alert("het roi");
            }
            console.log("useEffect");
        }, [listUser]
    );
    return (
        <div className="display-infor-container">
            <div>
                <spand onClick={() => handleShowHighListUser()}>
                    Show list user
                </spand>
            </div>
            {isShowHighListUser &&
                <>
                    {
                        listUser.map((user) => {

                            return (
                                <div>
                                    <div key={user.id} className={user.age > 20 ? "red" : "green"}>
                                        <div>My name: {user.name}</div>
                                        <div>My age: {user.age}</div>
                                    </div>
                                    <button onClick={() => { props.DeleteUser(user.id) }}>Delete</button>
                                </div>
                            )
                        })
                    }
                </>
            }
        </div>
    )

}

export default DisplayInfor;