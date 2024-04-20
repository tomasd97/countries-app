import './App.css';
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from './services/queries.js';
import { useState } from "react";
import CountryCard from './components/country-card/CountryCard.jsx';
import SearchBar from './components/search-bar/SearchBar.jsx';
import Paginator from './components/paginator/Paginator.jsx';

function App() {
    const [page, setPage] = useState(1);
    const { loading, error, data } = useQuery(GET_COUNTRIES);
    const [filter, setFilter] = useState("");

    const maxPages = data && Math.ceil(data.countries.filter(country => country.name.toUpperCase().includes(filter.toUpperCase())).length / 12);

    if (loading && !data) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    return (
        <div className="flex flex-col items-center gap-[40px]">
            <SearchBar setFilter={setFilter}/>
            <div className="flex flex-wrap gap-[20px] justify-center">
                {
                    data && data.countries.filter(country => country.name.toUpperCase().includes(filter.toUpperCase())).slice((page - 1) * 12, (page - 1) * 12 + 12).map(country => 
                        <CountryCard key={country.code} props={country}/>
                    )
                }
            </div>
            <Paginator maxPages={maxPages} page={page} setPage={setPage}/>
        </div>
    );
}

export default App;
