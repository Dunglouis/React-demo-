import React from "react";

class DisplayInfor extends React.Component {
    render() {
        const { listUser } = this.props;
        return (
            <div>
                {
                    listUser.map((user) => {
                        return (
                            <div>
                                <div key={user.id}>
                                    <div>My name: {user.name}</div>
                                    <div>My age: {user.age}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            // <div>
            //     <div>My name: {}</div>
            //     <div>My age: {age}</div>
            // </div>
        )
    }
}

export default DisplayInfor;