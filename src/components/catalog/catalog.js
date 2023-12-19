import Stayl from './catalog.module.css'
import { useState, useEffect } from 'react';
import CatalogCard from '../catalog/catalogCard/catalogCard'
const Catalog = () => {
        const [counter, setCounter]=useState([])
        useEffect(()=>{
          fetch("https://657e09263e3f5b18946377d2.mockapi.io/app")
          .then((link)=>link.json())
          .then((link)=>setCounter(link))
          .catch(()=>console.log("error"))

        },[])
  return (
    <div className={Stayl.box}>
      <h1 className={Stayl.title}>Catalog</h1>
      {counter.map((counter)=>(
        <CatalogCard
        id={counter.id}
        key={counter.id}
        name={counter.name}
        description={counter.description}
        price={counter.price}
        />

      ))}

      
     
    </div>
  );
};
export default Catalog