import React from "react";
import './DisplayInfor.scss';

class DisplayInfor extends React.Component {
    state = {
        isListUser: true
    }
    showList = () => {
        this.setState({ isListUser: !this.state.isListUser })
    }
    render() {
        const { listUser } = this.props;
        return (
            <div className="display-infor-container">
                <div>
                    <span onClick={() => { this.showList() }}>
                        {this.state.isListUser === true ? "high list" : "show list"}
                    </span>
                </div>
                {this.state.isListUser &&
                    <div>
                        {
                            listUser.map((user) => {
                                console.log(user);
                                return (
                                    <div>
                                        <div key={user.id} className={user.age > 20 ? "red" : "green"}>
                                            <div>My name: {user.name}</div>
                                            <div>My age: {user.age}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
        )
    }
}

export default DisplayInfor;