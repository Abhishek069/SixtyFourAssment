import React from "react";
import {useState} from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import './MiddleDetails.css';



const data = [
    [
        {
            "name" : "State of Markets",
            "img":"https://paytmblogcdn.paytm.com/wp-content/uploads/2023/08/Blogs_Paytm_Bond-Market-vs.-Stock-Market_-Whats-the-Difference_-1.jpg",
            "Description":"The Market Capitalisation of indian stocks crossed US$4.5 Trillion in January"
        },
        {
            "name" : "The Central Capex Surge",
            "img":"https://www.myexcelonline.com/wp-content/uploads/2024/02/httpsoutranking.s3.amazonaws.com62459967_Aditi20Lundia631704482024-02-25T183A573A56.723484_Progress_Chart_in_Excel_14.png",
            "Description":"The Last Few years have seen a very substantial step up in capital"
        },
        {
            "name" : "Direact Taxes and Business Cycle",
            "img":"https://thumbs.dreamstime.com/b/analyse-your-tax-d-render-pie-chart-magnifying-glass-over-word-53896608.jpg",
            "Description":"The Share of direact taxes in total colleactions of the central goverment is"
        },
        {
            "name" : "Banking Monitor",
            "img":"https://img.freepik.com/premium-vector/online-banking-money-transaction-business-mobile-payment-computer-monitor-with-bank-icon_168129-1244.jpg",
            "Description":"Credit growth has remained broadly stable in recent weeks at just"
        }
        
    ],
    [
        {
            "name" : "Data Market",
            "img":"https://paytmblogcdn.paytm.com/wp-content/uploads/2023/08/Blogs_Paytm_Bond-Market-vs.-Stock-Market_-Whats-the-Difference_-1.jpg",
            "Description":"The Market Capitalisation of indian stocks crossed US$4.5 Trillion in January"
        },
        {
            "name" : "Central Capex Surge",
            "img":"https://www.myexcelonline.com/wp-content/uploads/2024/02/httpsoutranking.s3.amazonaws.com62459967_Aditi20Lundia631704482024-02-25T183A573A56.723484_Progress_Chart_in_Excel_14.png",
            "Description":"The Last Few years have seen a very substantial step up in capital"
        },
        {
            "name" : "Business Cycle",
            "img":"https://thumbs.dreamstime.com/b/analyse-your-tax-d-render-pie-chart-magnifying-glass-over-word-53896608.jpg",
            "Description":"The Share of direact taxes in total colleactions of the central goverment is"
        },
        {
            "name" : "Banking Monitor",
            "img":"https://img.freepik.com/premium-vector/online-banking-money-transaction-business-mobile-payment-computer-monitor-with-bank-icon_168129-1244.jpg",
            "Description":"Credit growth has remained broadly stable in recent weeks at just"
        }
        
    ],[
        {
            "name" : "State Markets",
            "img":"https://paytmblogcdn.paytm.com/wp-content/uploads/2023/08/Blogs_Paytm_Bond-Market-vs.-Stock-Market_-Whats-the-Difference_-1.jpg",
            "Description":"The Market Capitalisation of indian stocks crossed US$4.5 Trillion in January"
        },
        {
            "name" : "The Central Capex Surge",
            "img":"https://www.myexcelonline.com/wp-content/uploads/2024/02/httpsoutranking.s3.amazonaws.com62459967_Aditi20Lundia631704482024-02-25T183A573A56.723484_Progress_Chart_in_Excel_14.png",
            "Description":"The Last Few years have seen a very substantial step up in capital"
        },
        {
            "name" : "Direact Taxes and Business Cycle",
            "img":"https://thumbs.dreamstime.com/b/analyse-your-tax-d-render-pie-chart-magnifying-glass-over-word-53896608.jpg",
            "Description":"The Share of direact taxes in total colleactions of the central goverment is"
        },
        {
            "name" : "Banking Monitor",
            "img":"https://img.freepik.com/premium-vector/online-banking-money-transaction-business-mobile-payment-computer-monitor-with-bank-icon_168129-1244.jpg",
            "Description":"Credit growth has remained broadly stable in recent weeks at just"
        }
        
    ],[
        {
            "name" : "State of Markets",
            "img":"https://paytmblogcdn.paytm.com/wp-content/uploads/2023/08/Blogs_Paytm_Bond-Market-vs.-Stock-Market_-Whats-the-Difference_-1.jpg",
            "Description":"The Market Capitalisation of indian stocks crossed US$4.5 Trillion in January"
        },
        {
            "name" : "The Central Capex Surge",
            "img":"https://www.myexcelonline.com/wp-content/uploads/2024/02/httpsoutranking.s3.amazonaws.com62459967_Aditi20Lundia631704482024-02-25T183A573A56.723484_Progress_Chart_in_Excel_14.png",
            "Description":"The Last Few years have seen a very substantial step up in capital"
        },
        {
            "name" : "Direact Taxes and Business Cycle",
            "img":"https://thumbs.dreamstime.com/b/analyse-your-tax-d-render-pie-chart-magnifying-glass-over-word-53896608.jpg",
            "Description":"The Share of direact taxes in total colleactions of the central goverment is"
        },
        {
            "name" : "Banking Monitor",
            "img":"https://img.freepik.com/premium-vector/online-banking-money-transaction-business-mobile-payment-computer-monitor-with-bank-icon_168129-1244.jpg",
            "Description":"Credit growth has remained broadly stable in recent weeks at just"
        }
        
    ],[
        {
            "name" : "State of Markets",
            "img":"https://paytmblogcdn.paytm.com/wp-content/uploads/2023/08/Blogs_Paytm_Bond-Market-vs.-Stock-Market_-Whats-the-Difference_-1.jpg",
            "Description":"The Market Capitalisation of indian stocks crossed US$4.5 Trillion in January"
        },
        {
            "name" : "The Central Capex Surge",
            "img":"https://www.myexcelonline.com/wp-content/uploads/2024/02/httpsoutranking.s3.amazonaws.com62459967_Aditi20Lundia631704482024-02-25T183A573A56.723484_Progress_Chart_in_Excel_14.png",
            "Description":"The Last Few years have seen a very substantial step up in capital"
        },
        {
            "name" : "Direact Taxes and Business Cycle",
            "img":"https://thumbs.dreamstime.com/b/analyse-your-tax-d-render-pie-chart-magnifying-glass-over-word-53896608.jpg",
            "Description":"The Share of direact taxes in total colleactions of the central goverment is"
        },
        {
            "name" : "Banking Monitor",
            "img":"https://img.freepik.com/premium-vector/online-banking-money-transaction-business-mobile-payment-computer-monitor-with-bank-icon_168129-1244.jpg",
            "Description":"Credit growth has remained broadly stable in recent weeks at just"
        }
        
    ],
]

function MiddleDeatils(){

    const [range,setRange] = useState(1)

    const RangeCount =()=>{
        if(range<4){
            setRange(range+1);
        }
        else{
            setRange(0)
        }
    }
    const RangeCountRev =()=>{
        if(range>1){
            setRange(range-1);
        }
        else{
            setRange(4)
        }
    }

    const update_data = data[range]
    const image = "img"
    
    console.log(update_data)
    return(
        <>
        <div className="middleDeatils-card-container">
            <button className="nextBtn" onClick={RangeCountRev}>
                <IoIosArrowBack/>
             </button>   
                <div className="middleDetails-content"> 
                    <div className="submidleDeatils-card-container">
                        {
                            update_data.map((e)=>{
                                return(
                                    <div className="middle-home-card-container">
                                        <img src={e.img} className="image-middleDeatils" alt="img"/>
                                        <h4>{e.name}</h4>
                                        <p className="prgdetials">{e.Description}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            <button className="nextBtn" onClick={RangeCount}>
                <IoIosArrowForward/>
             </button>   
        </div>
        <div>
            
        </div>
        </>
    )
    
}

export default MiddleDeatils