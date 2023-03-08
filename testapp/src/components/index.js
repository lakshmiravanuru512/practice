import "./index.css" 
const UserProfile=(props)=>{
    
    const {userDetails}=props;
    const{imageUrl,name,role}=userDetails;

    return(
    <div className="card-container">
        <img src={imageUrl} className="avatar" alt="Avatar"/>
        <div className="user-details-container">
            <h1 className="user-name">{name}</h1>
            <p className="user-role">{role}</p>

        </div>
    </div>
)
}
export default UserProfile