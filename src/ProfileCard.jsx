import profilepic from './logo.svg'

function Profilecard(props){
    return (
        // <p>{props.name}{props.age}{props.profilePicture}</p>
        <div className="profilecard">
            <img className='image' src={profilepic} alt="this is a profile card"></img>
            <h2 className='cardtitle'>Asingura Philip</h2>
            <p>CS student</p>
        </div>
    );
}

export default Profilecard