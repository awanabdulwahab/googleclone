import React from "react";
import './SearchPage.css'
import {useStateValue} from "../StateProvider";
import useGoogleSearch from "../Keys/useGoogleSearch";
import Search from "../components/Search";
import SearchIcon from '@material-ui/icons/Search'
import {Link} from "react-router-dom";
import DescriptionIcon from '@material-ui/icons/Description'
import ImageIcon from '@material-ui/icons/Image'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import RoomIcon from '@material-ui/icons/Room'
import MoreVertIcon from '@material-ui/icons/More'

function SearchPage() {
    const [{term}, dispatch] = useStateValue();
    // Live API CALL
    //const {data}  = useGoogleSearch(term);
    const data = Response;
    // API used
    console.log(data);
    return(
        <div className={'searchPage'}>
            <div className={'searchPage_header'}>
                <img className={'searchPage_logo'} src={'http://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}/>
                <div className={'searchPage_headerBody'}>
                    <Search hideButtons />
                    <div className={'searchPage_options'}>
                        <div className={'searchPage_optionLeft'}>
                            <div className={'searchPage_option'}>
                                <SearchIcon/>
                                <Link to={'/all'}>All</Link>
                            </div>
                            <div className={'searchPage_option'}>
                                <DescriptionIcon/>
                                <Link to={'/description'}>News</Link>
                            </div>
                            <div className={'searchPage_option'}>
                                <ImageIcon/>
                                <Link to={'/image'}>Image</Link>
                            </div>
                            <div className={'searchPage_option'}>
                                <LocalOfferIcon/>
                                <Link to={'/shopping'}>Shopping</Link>
                            </div>
                            <div className={'searchPage_option'}>
                                <RoomIcon/>
                                <Link to={'/maps'}>Maps</Link>
                            </div>
                            <div className={'searchPage_option'}>
                                <MoreVertIcon/>
                                <Link to={'/more'}>more</Link>
                            </div>

                        </div>
                        <div className={'searchPage_optionRight'}>
                            <div className={'searchPage_option'}>
                                <Link to={'/setting'}>Settings</Link>
                            </div>
                            <div className={'searchPage_option'}>
                                <Link to={'/tools'}>Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'searchPage_results'}>

            </div>
        </div>
    )

}

export default SearchPage