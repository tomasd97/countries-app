import globeIcon from '../../assets/globeIcon.svg';
import phoneIcon from '../../assets/phoneIcon.svg';
import locationIcon from '../../assets/locationIcon.svg';
import arFlag from '../../assets/arFlag.png'

const CountryCard = (props) => {
    const { name, currency, states, languages, capital, phone } = props.props;
    const parsedCurrency = currency && currency.split(',');
    return (
        <div className="h-[256px] w-full md:w-[430px] rounded-2xl border-2 border-gray-border p-8 flex flex-col justify-between bg-gray-background">
            {/* SECCION DEL TITULO/IMAGEN */}
            <div className="flex items-center gap-[10px]">
                <div className="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center">
                    <img src={arFlag}/>
                </div>
                <div className="flex flex-1 flex-col gap-[2px] overflow-hidden">
                    <h2 className="font-bold text-2xl text-white text-ellipsis truncate">{name}</h2>
                    <div className="flex gap-[10px] items-center">
                        <div className="flex gap-[5px] items-center">
                            <img src={locationIcon}/>
                            <p>{capital ?? 'No capital'}</p>
                        </div>
                        <div className="flex gap-[5px] items-center">
                            <img src={globeIcon}/>
                            <p>{states.length} states</p>
                        </div>
                        <div className="flex gap-[5px] items-center">
                            <img src={phoneIcon}/>
                            <p>+{phone}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 divide-y-2 divide-gray-divider">
                {/* CURRENCY */}
                {
                    parsedCurrency && 
                        <div className="flex flex-col gap-[5px]">
                            <h4 className="font-semibold text-base text-white">Currency</h4>
                            <div className="flex items-center gap-[9px]">
                                {
                                    parsedCurrency.slice(0, 1).map((currency, index) =>
                                        <div key={index} className="bg-green-currency py-1 px-2 rounded-full">
                                            <p className="font-semibold text-sm text-white">{currency}</p>
                                        </div>
                                    )
                                }
                                {parsedCurrency.length > 1 && <p className="font-semibold text-sm">+ {parsedCurrency.length - 1}</p>}
                            </div>
                        </div>
                }
                {/* LENGUAJE */}
                {languages.length > 0 &&
                    <div className="flex flex-col gap-[5px]">
                        <h4 className="font-semibold text-base text-white">Languages</h4>
                        <div className="flex items-center gap-[9px]">
                            {
                                languages.slice(0, 2).map((language, index) =>
                                    <div key={index} className="bg-blue-language py-1 px-2 rounded-full">
                                        <p className="font-semibold text-sm text-white">{language.name}</p>
                                    </div>
                                )
                            }
                            {languages.length > 2 && <p className="font-semibold text-sm">+ {languages.length - 2}</p>}
                        </div>
                    </div> 
                }
            </div>
        </div>
    );
};

export default CountryCard;
