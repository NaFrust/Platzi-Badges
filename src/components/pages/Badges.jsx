import React from 'react';
//import Navbar from '../Navbar';
import './Styles/Badges.css';
import logoConf from '../../images/conf.svg'
import BadgesList from '../BadgesList';
import { Link } from 'react-router-dom';

class Badges extends React.Component{
   
    
    constructor(){
        super()
        this.state = {
            loading: true,
            error: null,
            data:{
                results: []
            }   
        }
    }
    componentDidMount(){
      this.fetchCharacters()
    }

    fetchCharacters = async () =>{
        this.setState({loading: true, error: null })
        try{
            const response = await fetch('https://rickandmortyapi.com/api/character')
            const data = await response.json();
            this.setState({
                data: data,
                loading:false,
            })
        } catch (error){
            this.setState({loading: false, error: error })
        }
    }
        

    
    
    render(){
        if(this.state.loading === true){
            return "loading"
        }
        return(
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo"  src={logoConf} alt="conf logo"/>
                        </div>  
                    </div>
                </div>
                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">New Badge </Link>
                    </div>     
                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList badges={this.state.data}/>
                           
                        </div>    
                    </div>     

                </div>      
            </React.Fragment>
        )
    }
}

export default Badges;