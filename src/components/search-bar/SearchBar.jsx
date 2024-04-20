import searchIcon from '../../assets/searchIcon.svg'

const SearchBar = ({ setFilter }) => {
    return(
        <div className="w-[560px] box-border flex items-center rounded-full border-2 border-gray-border bg-gray-background py-4 px-8">
            <span className="inline-block w-7 h-7">
                <img src={searchIcon}/>
            </span>
            <input onChange={(e) => setFilter(e.target.value)} className="h-7 text-2xl text-gray-700 bg-gray-background ml-4 outline-none border-none flex-1 focus:outline-none" type="search" placeholder="Search..."/>
        </div>
    )
}

export default SearchBar;