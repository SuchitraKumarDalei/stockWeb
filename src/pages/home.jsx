import { Outlet } from "react-router-dom";
import CompanyList from "../components/company-list";
import Header from "../components/header";
import axios from "axios"
import Papa from 'papaparse'
import { useEffect, useState } from "react";

export default function Home(){
    const [cmpList,setCpmList] = useState([]);
    const[isLoading,setIsLoading] = useState(false);

    const currentUrl = window.location.href.toString();
    console.log("Current URL:", currentUrl);

  async function fetchCSV() {
    try {
        setIsLoading(true)       
      const response = await axios.get('https://raw.githubusercontent.com/shaktids/stock_app_test/refs/heads/main/dump.csv');

      const csvData = response.data;

      const parseCsvData = Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true,
      })

      const jsonParseCsvArray = parseCsvData.data;
      let newArray = jsonParseCsvArray.slice(0,10);
      setCpmList(newArray);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(()=>{
    fetchCSV();
  },[])
    return (
        isLoading ? <p>Please wait while loading......</p>:
        <div className="flex flex-col">
            <Header/>
            <div className="flex min-h-[85vh]">
                <div className="min-w-[260px]">
                    <CompanyList cmpList={cmpList} />
                </div>
                
                <div className="p-3 w-full">
                    <Outlet/>
                </div>
            </div>
            <div className="bg-slate-400 text-center py-7"> Created By Suchitra , daleisuchitra22@gmail.com</div>
        </div>
    )
}