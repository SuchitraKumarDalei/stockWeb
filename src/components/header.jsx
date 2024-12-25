import { useNavigate } from "react-router-dom"

export default function Header(){
    const navigate = useNavigate();
    return (
        <nav className="flex justify-between font-semibold text-2xl items-center border-b-2 px-10 py-6 bg-slate-300">
            <h1 className="hover:text-slate-200 hover:cursor-default">Buissnes<span className="font-normal text-white">-stock</span></h1>
            <div className="flex justify-between gap-5">
                <div className="cursor-pointer hover:text-slate-500">Home</div>
                <div onClick={()=>navigate('/welcome-page')} className="cursor-pointer hover:text-slate-500">About</div>
            </div>
        </nav>
    )
}