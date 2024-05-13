import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";

const ManagerUser = () => {
    return (
        <div className="manage-user-container">
            <div className="title">
                Manager user
            </div>
            <div className="user-content">
                <div>
                    <button>Add new user</button>

                </div>
                <div>
                    table users
                </div>
                <ModalCreateUser />

            </div>
        </div>
    )
}

export default ManagerUser;