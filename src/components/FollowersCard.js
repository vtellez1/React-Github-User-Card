import React from 'react';

const FollowersCard = props => {

console.log(props.followers);

return( 
    <div className="FollowerCardContainer">
        <h3>My GitHub Followers:</h3>
        
        <div className="FollowerCard">
        {props.followers.map(person => (
            <div key={person.id}>
                <img style={{width: 175, height: 175}} alt= "profile pic" src={person.avatar_url}/>
                <p>Username: {person.login}</p>
                <a href={person.html_url}>View GitHub</a>
            </div>
        ))} 
        </div>
    </div>
    )
}
export default FollowersCard;