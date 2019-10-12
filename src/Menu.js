import React from 'react';
import Style from './Style.css';
import {Link} from 'react-router-dom';

const Menu = function(){
    return (
        <div className="style">
            
                <h2> 
                   <Link to="/"> Home</Link>
                </h2>
            

                <button style={{marginRight:"20px"}}> 
                     <Link to="Button"> Show</Link>
                </button>
                
                <button> 
                    <Link to="Create"> Create</Link>
                </button>
            
        </div>
    );
}

 
export default Menu;