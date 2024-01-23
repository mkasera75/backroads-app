import PageLink from "./PageLink";
import { pageLinks } from "../data";
const PageLinks=({parentClass,itemClass})=>
{
    return(
        <ul className={parentClass} id="nav-links">
            {pageLinks.map((pageLink)=>{
                return <PageLink key={pageLink.id} itemClass={itemClass} {...pageLink}/>
            })}
        </ul>
    )
}
export default PageLinks;