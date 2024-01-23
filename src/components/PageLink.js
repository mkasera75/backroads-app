const PageLink=({itemClass, id,href,text})=>{
    // const {id,href,text}= pageLink;
    return(
        
        <li key={id}><a href={href} className={itemClass}>{text} </a></li>
    )
}
export default PageLink;