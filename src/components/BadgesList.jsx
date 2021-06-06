import React from 'react';
import './Styles/BadgesList.css';

class BadgesList extends React.Component{
    render(){
        return(
            <ul className="list-unstyled">
                {this.props.badges.results.map( (badge)=> {
                    return(
                            <li key={badge.id} className="BadgesListItem">
                                <img src={badge.image} alt="Avatar" className="BadgesListItem__avatar"/>
                                <div>
                                    <div>
                                        <strong>{badge.name} | Status: "{badge.status}"</strong>
                                    </div>
                                    <div className="Twitter__name">
                                        <span className="Twitter__logo ">@{badge.gender}</span>
                                    </div>
                                    <div>
                                        {badge.species}
                                    </div>
                                </div>
                                
                            </li>
                        );
                    })   
                }
           
            </ul>      
            
        )
    }
}
export default BadgesList;