import backArrow from '../../assets/backArrow.svg';
import nextArrow from '../../assets/nextArrow.svg'

const Paginator = ({ setPage, page, maxPages }) => {
    const startPage = Math.max(1, page - 2);
    const endPage = Math.min(maxPages - 1, page + 2);
    const buttonsArray = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

    return(
        <div className="flex gap-[8px] items-center">
            <button disabled={page === 1} onClick={() => setPage(page - 1)} className={`w-[32px] h-[32px] rounded-lg border-2 border-gray-border bg-${page === 1 ? 'gray-border' :  'gray-background'} flex justify-center items-center`}>
                <img src={backArrow}/>
            </button>
            {
                buttonsArray.map(index => 
                    <button key={index} className={`w-[32px] h-[32px] rounded-lg border-2 border-${page === index ? 'white' : 'gray-border'} bg-gray-background flex justify-center items-center`} onClick={() => setPage(index)}>{index}</button>
                )
            }
            <button disabled={page === maxPages} className={`w-[32px] h-[32px] rounded-lg border-2 border-gray-border bg-${page === maxPages ? 'gray-border' :  'gray-background'} flex justify-center items-center`} onClick={() => setPage(page + 1)}>
                 <img src={nextArrow}/>
            </button>
        </div>
    )
}

export default Paginator;
