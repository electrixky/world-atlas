export const SearchFilter = ({search, setSearch, filter, setFilter}) => {
    const handleInputChange = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    const handleSelectChange = (e) => {
        e.preventDefault()
        setFilter(e.target.value)
    }

    return <section className="section-searchFilter container">
        <input type="text" placeholder="Search..." value={search} onChange={handleInputChange}/>
        <div>
            <select value={filter} onChange={handleSelectChange} className="select-section">
                <option value="All">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select></div>
    </section>
}