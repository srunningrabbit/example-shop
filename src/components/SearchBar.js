import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
    const [localQuery, setLocalQuery] = useState("");
    const navigate = useNavigate();

    const executeSearch = (e) => {
        e.preventDefault();

        if (localQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(localQuery.trim())}`);
        }
    }

    const searchInputRef = useRef(null);

    const handleSearchClick = () => {
        searchInputRef.current.focus();
    }

    return (
        <form className="search-bar" onSubmit={executeSearch}>
            <input ref={searchInputRef} type="search" placeholder="Search" value={localQuery} onChange={(e) => setLocalQuery(e.target.value)} />
            <button type="submit" style={{ display: "none" }}></button>
            <i className="fi fi-bs-search" onClick={handleSearchClick}></i>
        </form>
    );
}