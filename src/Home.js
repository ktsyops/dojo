import { useState } from "react";

const Home = () => {
    // let name = 'Kwaku'
const [name, setName] = useState('Kwaku');

    const handleClick = () => {
        setName('Tsyops');
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;