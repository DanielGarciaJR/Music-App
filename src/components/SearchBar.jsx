import React,{useState} from 'react';
import { GoSearch } from "react-icons/go";
import { baseUrl } from '../../api/api';
import { helpHttp } from '../helpers/helpHttp'; 
import MainContainer from './MainContainer';
import style from '../styles/container.module.css';


export default function SearchBar(){

    //state
    const [data,setData] = useState([]);
    const [input, setInput] = useState({search: ''});
    const [isLoading, setIsLoading] = useState(false);

    let api = helpHttp();
    let url = baseUrl + `/search?term=${input.search}&media=music&limit=25`;


    //funtions
    const handleChange = (e) => { setInput({ [e.target.name]: e.target.value}) ;}
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        if(!input.search){
            alert('WARNING: Search bar cannot be empty');
            setIsLoading(false);
        }else{
            api.get(url).then((res) => {
                setData(res.results);   
                setInput({search:''});
                setIsLoading(false);    
            });
        }
    }

    return(
        <div className={style.searchBar}>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Search a song or artist' name='search' value={input.search} onChange={handleChange} ></input>
                <button type='submit'><GoSearch/></button> 
            </form>

            <MainContainer displayData={data} loading={isLoading}/>
        </div>
    );
}