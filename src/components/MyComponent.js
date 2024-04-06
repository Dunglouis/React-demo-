
import React from "react";
import Userinfor from "./Userinfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {

    render() {

        return (
            <div>
                <Userinfor></Userinfor>
                <DisplayInfor name="Pham Dung" age={21} />
            </div>

        );
    }
}

export default MyComponent;