import React from "react";
import './sidebar.css'
import { CiSearch } from "react-icons/ci";
import { IoIosDesktop } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { LuBuilding2 } from "react-icons/lu";
import { AiFillDollarCircle } from "react-icons/ai";
import { SlEarphones } from "react-icons/sl";
import { IoIosSettings } from "react-icons/io";

function Sidebar(){
    return(
        <div className="sidebar-container">
            <div className="Top-log-bar">
                <h1 className="Sidebar-Logo-heading-container">d</h1>
            </div>
            <div className="midel-log-bar">
                <CiSearch className="icon"/>
                <IoIosDesktop className="icon"/>
                <CiCircleQuestion className="icon"/>
                <CiCalendar className="icon"/>
                <LuBuilding2 className="icon"/>
                <AiFillDollarCircle className="icon"/>
                <SlEarphones className="icon"/>
            </div>
            <div className="Bottom-log-bar">
            <IoIosSettings className="icon"/>
            </div>
        </div>
    )
}

export default Sidebar