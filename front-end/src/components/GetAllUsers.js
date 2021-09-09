import React , { Component , Fragment } from 'react';
import axios from 'axios';
import CardComp from './CardComp';

class GetAllUsers extends Component{
    constructor(){
        super();
        this.state = {
            dispData : []
        }
    }

    componentDidMount() {
        let { dispData } = this.state;
        axios.get("http://localhost:2020/machstatz/get_all_users")
            .then((response)=>{
                    console.log(response.data)
                    dispData = response.data;
                    this.setState({dispData : dispData});
            })
            .catch((err)=>{
                dispData = "No Data Found!";
                this.setState({dispData : dispData});
            })
    }

    render(){
        return(
            <Fragment>
                <div className="row mt-5">
                    <div className="shadow">
                        <h4 className="text-center text-primary">Get All Users Page</h4>
                        <div className="row" style={{margin:'30px'}}>
                            {this.state.dispData?
                            this.state.dispData.map((ele,key)=>{
                                let icon_name = ele.first_name[0];
                                let f_name = ele.first_name + ele.last_name;
                                return <CardComp key={key} name={icon_name} fullname={f_name} email={ele.email}/>
                            }):<h1>No data to display</h1>}
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default GetAllUsers;