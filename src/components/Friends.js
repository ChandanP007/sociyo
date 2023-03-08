import '../styles/friends.css';

function Friends(){
    return(
        <>
         <div id="Friends-Component">
            <div className="Component-Title Request1">
                <h5>FRIEND REQUESTS</h5>
                <div className='request-card'>
                    <img className="userImg" src='https://images.hindustantimes.com/img/2022/07/23/1600x900/john_wick_1658552069948_1658552090422_1658552090422.jfif'></img>
                    <b>Abhinav Pandey</b> 
                    <button className='Sociyo-btn accept-btn'>Confirm</button>
                    <button className='Sociyo-btn Negative'>Remove</button>
                </div>
            </div>
            <div className="Component-Title">
                <h5>FRIENDS</h5>
                <div className='User-Friends'>
                    <div className='request-card ufriend'>
                        <img className="userImg" src='https://images.hindustantimes.com/img/2022/07/23/1600x900/john_wick_1658552069948_1658552090422_1658552090422.jfif'></img>
                        <div className='userInfo'>
                            <b>Abhinav Pandey</b> 
                            <p>I'm a Developer</p>
                        </div>
                    </div>
                    <div className='request-card ufriend'>
                        <img className="userImg" src='https://images.hindustantimes.com/img/2022/07/23/1600x900/john_wick_1658552069948_1658552090422_1658552090422.jfif'></img>
                        <div className='userInfo'>
                            <b>Abhinav Pandey</b> 
                            <p>I'm a Developer</p>
                        </div>
                    </div>
                    <div className='request-card ufriend'>
                        <img className="userImg" src='https://images.hindustantimes.com/img/2022/07/23/1600x900/john_wick_1658552069948_1658552090422_1658552090422.jfif'></img>
                        <div className='userInfo'>
                            <b>Abhinav Pandey</b> 
                            <p>I'm a Developer</p>
                        </div>
                    </div>
                    
                </div>
            </div>
         </div>
        </>
    );
}

export default Friends;