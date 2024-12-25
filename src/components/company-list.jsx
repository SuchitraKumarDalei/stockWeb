import CompanyTile from "./company-tile";

export default function CompanyList({cmpList}){
    return (
        <div className="flex border-r-2 px-3 py-4 flex-col gap-4
         bg-slate-200">
            {
                cmpList && cmpList.length > 0 ?
                cmpList.map((singleCmp,index)=><CompanyTile key={index} singleCmp={singleCmp}/>) : null
            }
        </div>
    )
}