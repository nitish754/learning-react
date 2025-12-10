import './button.css';

const FilterButton = ({label,onClick}) => {
    return (
        <button className="filter-btn" onClick={onClick}>{label || 'Sample Button'}</button>
    );
}

export default FilterButton;