import React from 'react';
//import Navbar from '../Navbar';
import header from '../../images/conf.svg';
import './../pages/Styles/BadgeNew.css';
import Badge from '../Badge';
import BadgeForm from '../BadgeForm';

class BadgeNew extends React.Component {
    state = {form: {
        firstName: "",
        lastName:"",
        email:"",
        jobTitle:"",
        twitter:""

    } };

    handleChange = (event) =>{
        /* const nextForm = this.state.form
        nextForm[event.target.name] = event.target.value; */
        this.setState({
            form: {
            ...this.state.form, [event.target.name]: event.target.value,
            },
        });
    };

    render(){
        return(
        <React.Fragment>
            <div className="BadgeNew__hero">
                <img className="img-fluid" src={header} alt="Logo"/>
            </div>   
            <div className="container">
                <div className="row">
                    <div className="col-6">
                      <Badge firstName={this.state.form.firstName} lastName={this.state.form.lastName} twitter={this.state.form.twitter} jobTitle={this.state.form.jobTitle} avatarUrl="https://secure.gravatar.com/avatar/c7b8a01a9087d93d4acd2b6da7f9da05"/>
                    </div>
                    <div className="col-6">
                        <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>    
                    </div>
                </div>    
            </div>
        </React.Fragment>
        )
    }
}
           
export default BadgeNew;