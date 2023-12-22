import { useState } from 'react';
import { puppyList } from './data.js';
import './App.css';
import './index.css';
import './additional.css'
function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  function handleClick(puppyId) {
    setFeatPupId(puppyId);
  }
   // Find the puppy with the matching ID
   const featuredPup = puppies.find((pup) => pup.id === featPupId);
   // Log the featured puppy
   console.log(featuredPup);
   return (
     <div className="App">
       {puppies.map((puppy) => {
         return (
           <p onClick={() => handleClick(puppy.id)} key={puppy.id} className="dog-name">
             {puppy.name}
           </p>
         );
       })}
       {featPupId && (
         <div className="data-display">
           <h2>{featuredPup.name}</h2>
           <ul>
             <li>Age: {featuredPup.age}</li>
             <li>Email: {featuredPup.email}</li>
           </ul>
         </div>
       )}
     </div>
   );
 }
export default App;
