import "../styles/profile.css";

function Profile() {
  return (
    <>
      <div id="Profile-Component">
        <div className="User-Box">
          <h5 className="username">John Wick<br></br>@boogeyman</h5>
          <img
            className="userImg"
            src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
          ></img>
        </div>

        <div className="User-Nav">
          <ul className="links">
            <li className="active"><a href="#">🏠 Home</a></li>
            <li><a href="#">🧑‍🦰 People</a></li>
            <li><a href="#">🖼️ Photos</a></li>
            <li><a href="#">📰 News Feed</a></li>
            <li><a href="#">👤 Profile</a></li>
            <li><a href="#">⚙️ Settings</a></li>
          </ul>
        </div>

        <div className="Invitation-Box">
        <h3 className="Component-Title">
          INVITATIONS
        </h3>
          <img src="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg">

          </img>
          <div className="invite-actions">
          <button className="Sociyo-Btn" type="submit">Accept It</button>
          <button className="Sociyo-Btn Negative" type="submit">Decline</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
