import "../styles/feed.css";

function Feed() {
  return (
    <>
      <div id="Feed-Component">
        <div className="Stories-Container">
          <div className="Story user-story">
            <img
              className="story-img add-im"
              src="https://c4.wallpaperflare.com/wallpaper/586/603/742/minimalism-4k-for-mac-desktop-wallpaper-preview.jpg"
            ></img>
            <div className="story-title">
              <a className="add-story-btn" href="#">
                +
              </a>
            </div>
          </div>
          <div className="Story user-story fstory">
            <img
              className="story-img"
              src="https://youmatter.world/app/uploads/sites/2/2019/11/travel-world.jpg"
            ></img>
            <div className="user-icon">
                <img
                className="pro-img"
                src="https://images.hindustantimes.com/img/2022/07/23/1600x900/john_wick_1658552069948_1658552090422_1658552090422.jfif"
              ></img>
            </div>
            <div className="fstory-title">
              <h6>Aman</h6>
            </div>
          </div>
          <div className="Story user-story fstory">
            <img
              className="story-img"
              src="https://youmatter.world/app/uploads/sites/2/2019/11/travel-world.jpg"
            ></img>
            <div className="user-icon">
                <img
                className="pro-img"
                src="https://images.hindustantimes.com/img/2022/07/23/1600x900/john_wick_1658552069948_1658552090422_1658552090422.jfif"
              ></img>
            </div>
            <div className="fstory-title">
              <h6>Abhishek</h6>
            </div>
          </div>
          <div className="Story user-story fstory">
            <img
              className="story-img"
              src="https://youmatter.world/app/uploads/sites/2/2019/11/travel-world.jpg"
            ></img>
            <div className="user-icon">
                <img
                className="pro-img"
                src="https://images.hindustantimes.com/img/2022/07/23/1600x900/john_wick_1658552069948_1658552090422_1658552090422.jfif"
              ></img>
            </div>
            <div className="fstory-title">
              <h6>Debojeet</h6>
            </div>
          </div>
          <div className="Story user-story fstory">
            <img
              className="story-img"
              src="https://youmatter.world/app/uploads/sites/2/2019/11/travel-world.jpg"
            ></img>
            <div className="user-icon">
                <img
                className="pro-img"
                src="https://images.hindustantimes.com/img/2022/07/23/1600x900/john_wick_1658552069948_1658552090422_1658552090422.jfif"
              ></img>
            </div>
            <div className="fstory-title">
              <h6>Aneesh</h6>
            </div>
          </div>
        </div>
        <div className="Post-Box">
          <img
            className="pro-img"
            src="https://images.hindustantimes.com/img/2022/07/23/1600x900/john_wick_1658552069948_1658552090422_1658552090422.jfif"
          ></img>
          <input
            type="text"
            className="post-content"
            placeholder="Write Something ... "
          ></input>
          <button type="submit" className="post-btn">
            Post
          </button>
        </div>

        <div id="User-Feed">

          <div className="feed-box">
            <div className="feed-top">
              <div className="pro-area">
                <img
                  className="pro-img"
                  src="https://images.hindustantimes.com/img/2022/07/23/1600x900/john_wick_1658552069948_1658552090422_1658552090422.jfif"
                ></img>
                <div className="name-time">
                  <h3>John Wick</h3>
                  <p>12 hours ago</p>
                </div>
              </div>
              <div className="more-opt">...</div>
            </div>

            <div className="feed-middle">
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words,
              </p>
            </div>

            <div className="feed-bottom">
                <a href="">❤️ Like</a>
                <a href="">🚀 Visit</a>
                <a href="">✉️ Comment</a>
                <a href="">🔃 Share</a> 
            </div>
          </div>

          <div className="feed-box">
            <div className="feed-top">
              <div className="pro-area">
                <img
                  className="pro-img"
                  src="https://images.hindustantimes.com/img/2022/07/23/1600x900/john_wick_1658552069948_1658552090422_1658552090422.jfif"
                ></img>
                <div className="name-time">
                  <h3>John Wick</h3>
                  <p>12 hours ago</p>
                </div>
              </div>
              <div className="more-opt">...</div>
            </div>

            <div className="feed-middle">
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words,
                making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words,
              </p>
            </div>

            <div className="feed-bottom">
                <a href="">❤️ Like</a>
                <a href="">🚀 Visit</a>
                <a href="">✉️ Comment</a>
                <a href="">🔃 Share</a> 
            </div>
          </div>

          <div className="feed-box">
            <div className="feed-top">
              <div className="pro-area">
                <img
                  className="pro-img"
                  src="https://images.hindustantimes.com/img/2022/07/23/1600x900/john_wick_1658552069948_1658552090422_1658552090422.jfif"
                ></img>
                <div className="name-time">
                  <h3>John Wick</h3>
                  <p>12 hours ago</p>
                </div>
              </div>
              <div className="more-opt">...</div>
            </div>

            <div className="feed-middle">
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words,

                making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words,

                making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words,
              </p>
            </div>

            <div className="feed-bottom">
                <a href="">❤️ Like</a>
                <a href="">🚀 Visit</a>
                <a href="">✉️ Comment</a>
                <a href="">🔃 Share</a> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feed;
