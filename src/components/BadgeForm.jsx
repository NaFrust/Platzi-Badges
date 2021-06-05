import React from 'react';

class BadgeForm extends React.Component {
 /*    state = {
        firstName: "",
        lastName:"",
        email:"",
        jobTitle:"",
        twitter:""

    } */
    
    /*   handleChange = (event) => {
         console.log({
            name: event.target.name,
            value: event.target.value})
         
        this.setState({[event.target.name]: event.target.value})
    } */
    
    handleClick = (event) => {
        console.log("hiciste click")
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        console.log("se mando")
    }
    
    
    render(){
        return(
            <div>
                <h1>New Attendent</h1>
                <form onSubmit={this.props.onChange}>
                 <div className="form-group">
                    <label>First Name </label>
                    <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" value={this.props.formValues.firstName}/>
                 </div>
                 <div className="form-group">
                    <label>Last Name </label>
                    <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value={this.props.formValues.lastName}/>
                 </div>
                 <div className="form-group">
                    <label>EMAIL </label>
                    <input onChange={this.props.onChange} className="form-control" type="email" name="email" value={this.props.formValues.email}/>
                 </div>
                 <div className="form-group">
                    <label>Job Title </label>
                    <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" value={this.props.formValues.jobTitle}/>
                 </div>
                 <div className="form-group">
                    <label>Twitter </label>
                    <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" value={this.props.formValues.twitter}/>
                 </div>
                 <button onClick={this.handleClick} className="btn btn-primary mt-1">Save</button>
                </form>
            </div>
        )
    }
}
export default BadgeForm;