import '../styles/feed.css';

function Feed(){
    return(
        <>
        <div id="Feed-Component">
            <div className="Stories-Container">
                <div className='Story user-story'>
                    <img className="story-img add-im" src="https://c4.wallpaperflare.com/wallpaper/586/603/742/minimalism-4k-for-mac-desktop-wallpaper-preview.jpg">
                    </img>
                    <div className='story-title'>
                        <a className='add-story-btn' href="#">+</a>
                    </div>
                </div>
                <div className='Story user-story fstory'>
                    <img className="story-img" src="https://youmatter.world/app/uploads/sites/2/2019/11/travel-world.jpg">
                    </img>
                    <div className='fstory-title'>
                        <h6>Aman</h6>
                    </div>
                </div>
                <div className='Story user-story fstory'>
                    <img className="story-img" src="https://youmatter.world/app/uploads/sites/2/2019/11/travel-world.jpg">
                    </img>
                    <div className='fstory-title'>
                        <h6>Abhishek</h6>
                    </div>
                </div>
                <div className='Story user-story fstory'>
                    <img className="story-img" src="https://youmatter.world/app/uploads/sites/2/2019/11/travel-world.jpg">
                    </img>
                    <div className='fstory-title'>
                        <h6>Debojeet</h6>
                    </div>
                </div>
                
            </div>
            <div className="Post-Box">
                    Post Something
            </div>
            <div className="User-Feed">
                    User-Feed
            </div>
            </div>
        </>
    );
}

export default Feed;