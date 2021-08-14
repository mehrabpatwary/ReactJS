const date = new Date();
const dateYear = date.getFullYear();
const dateMonth = date.getMonth();
const dateDay = date.getDay();

function Card(props) {
  const {key, todoTitle, todoDesc} = props;
  return <div className="card">
            <h3 className="cardTitle">{todoTitle}</h3>
            <p className="cardDesc">{todoDesc}</p>
            <p className="cardFooter">{dateDay + "/" + dateMonth + "/" + dateYear}</p>
         </div>
}
export default Card;