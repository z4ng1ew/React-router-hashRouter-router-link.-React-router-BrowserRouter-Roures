import { useParams } from 'react-router-dom';
import Stayl from './cardPage.module.css';
import { useEffect, useState } from 'react';

const CardPage = () => {
  const { id } = useParams(); 
  const [cat, setCat] = useState({});

  useEffect(() => {
    fetch(`https://657e09263e3f5b18946377d2.mockapi.io/app/${id}`)
      .then((response) => response.json())
      .then((data) => setCat(data))
      .catch((error) => console.log("error", error));
  }, []); 

  return (
    <div className={Stayl.box}>
      <h1 className={Stayl.title}>CardPage</h1>
      <p>{cat.name}</p>
      <p>{cat.price}</p>
      <p>{cat.description}</p>
      
    </div>
  );
};

export default CardPage;