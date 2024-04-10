import React, { useState } from "react";

// class Userinfor extends React.Component {
//     state = {
//         name: "dung",
//         age: 21,
//         address: "Thanh Hoa",
//     };

//     handle = (event) => {
//         console.log("done click");
//         console.log(this.handle(event));
//         this.setState({
//             name: "dung",
//             age: Math.floor(Math.random() * 100 + 1),
//         })
//     }

//     handleOnchange = (event) => {
//         this.setState({
//             name: event.target.value
//         })
//     }

//     handleOnchangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//     }


//     handleOnSubmit = (event) => {
//         event.preventDefault();
//         this.props.addUser({
//             id: Math.floor(Math.random() * 100) + 1,
//             name: this.state.name,
//             age: this.state.age
//         });
//     }

//     render() {
//         return (
//             <div>
//                 toi ten la: {this.state.name}
//                 <br />
//                 tuoi: {this.state.age}
//                 <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
//                     <label>Nhap Ten: </label>
//                     <input value={this.state.name} type="text" onChange={(event) => { this.handleOnchange(event) }} />
//                     <br />
//                     <label>Nhap Tuoi: </label>
//                     <input value={this.state.age} type="text" onChange={(event) => { this.handleOnchangeAge(event) }} />
//                     <button>submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

const Userinfor = (props) => {

    // state = {
    //     name: "dung",
    //     age: 21,
    //     address: "Thanh Hoa",
    // };

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("Thanh Hoa");

    const handleOnchangeName = (event) => {
        // this.setState({
        //     name: event.target.value
        // })
        setName(event.target.value);
    }

    const handleOnchangeAge = (event) => {
        // this.setState({
        //     age: event.target.value
        // })
        setAge(event.target.value);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.addUser({
            id: Math.floor(Math.random() * 100) + 1,
            name: name,
            age: age
        });
    }

    return (
        <>
            <div>
                toi ten la: {name}
                <br />
                tuoi: {age}
                <form onSubmit={(event) => { handleOnSubmit(event) }}>
                    <label>Nhap Ten: </label>
                    <input value={name} type="text" onChange={(event) => { handleOnchangeName(event) }} />
                    <br />
                    <label>Nhap Tuoi: </label>
                    <input value={age} type="text" onChange={(event) => { handleOnchangeAge(event) }} />                   <button>submit</button>
                </form>
            </div>
        </>
    );
}

export default Userinfor;