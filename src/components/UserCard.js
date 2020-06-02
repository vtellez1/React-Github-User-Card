import React from 'react';



const UserCard = props => {

console.log(props);

return( 
    <div className="MyCard">
        <div className="myImg">
        <img style={{width: 185, height: 185}} alt= "profile pic" src={props.user.avatar_url} />
        </div>

        <div className="myInfo">
        <h3>Name: {props.user.name}</h3>
        <p>Username: {props.user.login}</p>
        <p>Location: {props.user.location}</p>
        <p>Followers: {props.user.followers}</p>
        <p>Following: {props.user.following}</p>
        <p>Bio: {props.user.bio}</p>
        </div>

    </div>
    )
}
export default UserCard;