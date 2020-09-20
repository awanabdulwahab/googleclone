import React  from "react";
import './Home.css'
import { Link } from 'react-router-dom'
import AppsIcon from '@material-ui/icons/Apps'
import {Avatar} from "@material-ui/core";
import Search from "../components/Search";

function Home() {
    return(
        <div className='home'>

            <div className='home_header'>
                <div className='home_headerLeft'>
                    {/*{Link}*/}
                    <Link to={'/about'}>About</Link>
                    {/*{Link}*/}
                    <Link to={'/store'}>Store</Link>
                </div>
                <div className='home_headerRight'>
                    {/*{Link}*/}
                    <Link to={'/gmail'}>Gmail</Link>
                    {/*{Link}*/}
                    <Link to={'/images'}>Images</Link>
                    {/*{Icon}*/}
                    <AppsIcon />
                    {/*{Avatar}*/}
                    <Avatar></Avatar>
                </div>
            </div>

            <div className='home_body'>
                <img src="http://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt=""/>
                <div className={'home_inputContainer'}>
                    {/*{ Search container}*/}
                    <Search />
                </div>
            </div>

        </div>
    )
}

export default Home