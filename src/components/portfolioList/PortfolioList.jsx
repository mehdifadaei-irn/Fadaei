import "./list.scss"

function PortfolioList({title, active, setSelected, id}) {
    return (
        <li className={`list ${active && 'active'}`} onClick={()=> setSelected(id)}>
            {title}
        </li>
    );
}

export default PortfolioList;