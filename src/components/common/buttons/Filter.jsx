import  './button.css'

const toggleFilter = (filterVal) => {
    console.log("Filter applied:", filterVal);
}
const Filter = () => {
    const [active, setActive] = useState(false);
    return (
        <div className="filter">
            <select className="filter-select" onChange = {(e) => toggleFilter(e.target.value)}>
                <option value="rating">Rating</option>
                <option value="cost_low_high">Cost: Low to High</option>
                <option value="cost_high_low">Cost: High to Low</option>
            </select>
        </div>
    );
}

export default Filter;