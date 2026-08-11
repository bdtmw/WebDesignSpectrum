const PortfolioTab = ({ tab, isActive, onClick }) => {
    return (
        <li className="nav-item" role="presentation">
            <button
                type="button"
                className={`nav-link cust-nav-link ${isActive ? "active" : ""}`}
                onClick={() => onClick(tab.id)}
                role="tab"
                aria-selected={isActive}
                aria-controls={`${tab.id}-panel`}
                id={`${tab.id}-tab`}
            >
                {tab.label}
            </button>
        </li>
    );
};

export default PortfolioTab