import '../styles/nav.css';

function Nav()
{
    return(
        <>
        <div id="Nav">
            <div className="logo">
                <logo>SociYo</logo>
            </div>
            <div className="actions">
                <input type="text" placeholder="Search"></input>
                <button type="submit">Search</button>
                <h4>A</h4>
            </div>
        </div>
        </>
    );
}

export default Nav;