import { Link } from 'react-router-dom';
import Stayl from './catalogCard.module.css'
const catalogCard = (props) => {
  return (
    <div className={Stayl.box}>
      <h2><Link to={`/catalog/${props.id}`}>{props.name}</Link></h2>
      <p>{props.description}</p>
      <p>цена: {props.price}</p>
    </div>
  );
};
export default catalogCard