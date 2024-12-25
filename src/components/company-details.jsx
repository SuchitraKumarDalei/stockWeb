import { useLocation } from "react-router-dom"

export default function CompanyDetails(){

    const location  = useLocation()
    const singleCmp = location.state;
    return (
        <div className="flex flex-col rounded-md w-full border-2 ">
            <div className="py-4 px-3 flex justify-between items-center">
                <span className="text-2xl border-2 rounded-lg   bg-blue-200 font-semibold px-3 py-2 text-slate-600">{singleCmp?.index_name}
                </span>
                <span className="font-semibold text-slate-600">{singleCmp.index_date}</span>
            </div>
            <div className=" px-3 pb-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 border-b">
                <div className="flex flex-col justify-center items-center border-2 py-2 rounded-md shadow-md">
                    <div className="font-semibold">{singleCmp?.open_index_value}</div>
                    <div>Open</div>
                </div>
                <div className="flex flex-col justify-center items-center border-2 rounded-md shadow-md">
                    <div className="text-red-600 font-semibold" >{singleCmp?.low_index_value}</div>
                    <div className="text-slate-600">Low</div>
                </div>
                <div className="flex flex-col justify-center items-center border-2 rounded-md shadow-md">
                    <div className="text-green-600 font-semibold">{singleCmp?.high_index_value}</div>
                    <div className="text-slate-600">High</div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-6 justify-center py-3">
                <div className="font-bold text-xl  text-slate-700"><span className="font-normal">Increased By </span>
                    {singleCmp.points_change} &#40;<span>{singleCmp.change_percent}%</span>&#41;
                </div>
                <div>
                    <p className="text-xl text-slate-700">Total Volume <span className="font-bold">{singleCmp.volume}</span></p>
                </div>
                <div>
                    <p className="text-xl  text-slate-700">Total Turnover <span className="font-bold">{singleCmp.turnover_rs_cr} cr</span></p>
                </div>
                <div>
                    <p className="text-xl  text-slate-700">P/E ratio <span className="font-bold">{singleCmp.pe_ratio}</span></p>
                </div>
                <div>
                    <p className="text-xl  text-slate-700">P/B ratio <span className="font-bold">{singleCmp.pb_ratio}</span></p>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}