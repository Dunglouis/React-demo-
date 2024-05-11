import ModalCreateUser from "./ModalCreateUser";


const ManagerUser = () => {
    return (
        <div className="manage-user-container">
            <div className="title">
                Manager user
            </div>
            <div className="user-content">
                <button>Add new user</button>

            </div>
            <div>
                table users
                <ModalCreateUser />
            </div>
        </div>
    )
}

export default ManagerUser;