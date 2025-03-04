import profilepic from './logo.svg'

function Profilecard(props){
    return (
        // <p>{props.name}{props.age}{props.profilePicture}</p>
        <div className="profilecard">
            <img className='image' src={profilepic} alt="this is a profile card"></img>
            <h2 className='cardtitle'>{props.name}</h2>
            <p>{props.age} year old CS student</p>
        </div>
    );
}

export default Profilecard