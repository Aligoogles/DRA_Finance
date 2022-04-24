/* created Aelita  21113131*/

import {useState} from 'react';
import './NavBar.scss';
import '../../pages/Main-styles.scss';
import '../../pages/Variables.scss';

function Search (props) {

    const [name, setName] = useState([]);
    const [site, setSite] = useState("");


    function onSearchHandler(e){
        e.preventDefault()
        setName(e.target.value)


        for (var x in props.info){
            if(props.info[x].source.toLowerCase().includes(name.toLowerCase())){
              setSite(`https://www.${props.info[x].source.toLowerCase()}.com`)
              break;
            }     
        }

    };


    return (
        <div className="search-bar" >
            <input  type="text" value={name} placeholder="Start your search..." onChange={onSearchHandler}/>

            <button className="search-btn"><a href={site} >Search</a></button>

        </div>
    )
}

export default Search;
