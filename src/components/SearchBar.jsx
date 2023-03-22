import React,{useState} from 'react';
import style from '../styles/container.module.css';
import { GoSearch } from "react-icons/go";
import { baseUrl } from '../../api/api';
import { helpHttp } from '../helpers/helpHttp'; 
import MainContainer from './MainContainer';


export default function SearchBar(){

    //state
    const [data,setData] = useState([]);
    const [input, setInput] = useState({search: ''});

    let api = helpHttp();
    let url = baseUrl + `/search?term=${input.search}&media=music&limit=24`;


    //funtions
    const handleChange = (e) => { setInput({ [e.target.name]: e.target.value}) ;}
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        api.get(url).then((res) => {
            console.log(res);
            setData(res.results);
        })
    }


    return(
        <div className={style.searchBar}>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Search' name='search' value={input.search} onChange={handleChange} ></input>
                <button type='submit'><GoSearch/></button> 
            </form>

            <MainContainer displayData={data}/>
        </div>
    );
}