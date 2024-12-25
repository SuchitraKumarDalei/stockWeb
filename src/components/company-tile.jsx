import { useNavigate } from "react-router-dom"

export default function CompanyTile({singleCmp}){
    const navigate = useNavigate();
    return (
        <div onClick={()=>navigate('/company-details',{state :singleCmp })} className="flex flex-col gap-2 rounded-lg bg-white shadow-md shadow-slate-500 py-3 hover:cursor-pointer hover:bg-slate-300">
            <p className="text-xl font-semibold px-2">{singleCmp?.index_name}</p>
            <div className="flex gap-3 justify-center">
                <p>{singleCmp?.open_index_value}</p>
                <p className="text-red-600">{singleCmp?.low_index_value}</p>
                <p className="text-green-600">{singleCmp?.low_index_value}</p>
            </div>
        </div>
    )
}