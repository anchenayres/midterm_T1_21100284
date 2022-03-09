const Navigation = ()=>{
    return (
        <>
        <div className="nav">
            <img src={process.env.PUBLIC_URL+"./logo192.png"} width="100" />
<ul>
    <li><a href="/">ComponentOne</a></li>
    <li><a href="/ComponentTwo">ComponentTwo</a></li>
    <li><a href="/ComponentThree">ComponentThree</a></li>
</ul>
        </div>
        </>
    )
}
export default Navigation