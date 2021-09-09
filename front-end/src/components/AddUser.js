import React , { Component , Fragment} from 'react';
import axios from 'axios';

class AddUser extends Component{
    constructor(){
        super();
        this.state = {
            formData : {
                email : "",
                first_name : "",
                last_name : "",
                pwd : "",
                username : ""
            },
            formDataValid : {
                email : false,
                first_name : false,
                last_name : false,
                pwd : false,
                username : false,
                buttonActive : false
            },
            formDataError : {
                email : "",
                first_name : "",
                last_name : "",
                pwd : "",
                username : ""
            },
            responseData : ""
        }
    }

    handleChange = (event)=>{
        let fname = event.target.name;
        let value = event.target.value;
        let { formData } = this.state;
        formData[fname] = value;
        this.setState({formData : formData})
        this.validateForm(fname , value);
    }

    validateForm = (fname , value)=>{
        let {formDataError , formDataValid} = this.state;
        switch(fname){
            case "email":
                if (value === ""){
                    formDataError.email = "Field Required";
                    formDataValid.email = false;
                }else{
                    formDataError.email = "";
                    formDataValid.email = true;
                }
                break;
            case "first_name":
                if (value === ""){
                    formDataError.first_name = "Field Required";
                    formDataValid.first_name = false;
                }else{
                    formDataError.first_name = "";
                    formDataValid.first_name = true;
                }
                break;
            case "last_name":
                if (value === ""){
                    formDataError.last_name = "Field Required";
                    formDataValid.last_name = false;
                }else{
                    formDataError.last_name = "";
                    formDataValid.last_name = true;
                }
                break;
            case "pwd":
                if (value === ""){
                    formDataError.pwd = "Field Required";
                    formDataValid.pwd = false;
                }else{
                    formDataError.pwd = "";
                    formDataValid.pwd = true;
                }
                break;
            case "username":
                if (value === ""){
                    formDataError.username = "Field Required";
                    formDataValid.username = false;
                }else{
                    formDataError.username = "";
                    formDataValid.username = true;
                }
                break;
            default : break;
        }
        formDataValid.buttonActive = formDataValid.email && formDataValid.first_name && formDataValid.last_name && formDataValid.pwd && formDataValid.username;
        this.setState({formDataError : formDataError , formDataValid : formDataValid});
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        let { responseData } = this.state;
        axios.post("http://localhost:2020/machstatz/add_new_user",this.state.formData)
            .then((response)=>{
                responseData = response.data.message;
                console.log(responseData);
                this.setState({responseData : responseData});
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    render(){
        return(
            <Fragment>
                <div className="row mt-5">
                    <div className="col-lg-6 offset-lg-3 shadow">
                        <form onSubmit={this.handleSubmit}>
                            <h4 className="text-center text-primary">Add Users Page</h4>
                            <div className="form-group">
                                <p htmlFor="email">Email ID:</p>
                                <input type="text" name="email" onChange={this.handleChange} value={this.state.formData.email} className="form-control"></input>
                            </div>
                            <div>
                                <span className="text-danger">{this.state.formDataError.email}</span>
                            </div>
                            <div className="form-group">
                                <p htmlFor="first_name">First Name:</p>
                                <input type="text" name="first_name" onChange={this.handleChange} value={this.state.formData.first_name} className="form-control"></input>
                            </div>
                            <div>
                                <span className="text-danger">{this.state.formDataError.first_name}</span>
                            </div>
                            <div className="form-group">
                                <p htmlFor="last_name">Last Name:</p>
                                <input type="text" name="last_name" onChange={this.handleChange} value={this.state.formData.last_name} className="form-control"></input>
                            </div>
                            <div>
                                <span className="text-danger">{this.state.formDataError.last_name}</span>
                            </div>
                            <div className="form-group">
                                <p htmlFor="pwd">Password:</p>
                                <input type="text" name="pwd" onChange={this.handleChange} value={this.state.formData.pwd} className="form-control"></input>
                            </div>
                            <div>
                                <span className="text-danger">{this.state.formDataError.pwd}</span>
                            </div>
                            <div className="form-group">
                                <p htmlFor="username">Username:</p>
                                <input type="text" name="username" onChange={this.handleChange} value={this.state.formData.username} className="form-control"></input>
                            </div>
                            <div>
                                <span className="text-danger">{this.state.formDataError.username}</span>
                            </div>
                            <br />
                            <div className="form-group text-center">
                                <button type="submit" disabled={!this.state.formDataValid.buttonActive} className="btn btn-primary">Submit</button>
                            </div>
                            <br />
                        </form>
                        <div className="text-center">
                            <span className="text-success text-bold">{this.state.responseData}</span>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default AddUser;