import './IdCard.css'
const IdCard = (props) => {
  const { firstName, lastName, gender, height, birth, picture } = props;

  return (
    <div className="IdCard">
      <img src={picture} alt="idPicture" />
      <div className="id-content">
        <p>
          <span className="strong">First name: </span>
          {firstName}
        </p>
        <p>
          <span className="strong">Last name:</span>
          {lastName}
        </p>
        <p>
          <span className="strong">Gender:</span>
          {gender}
        </p>
        <p>
          <span className="strong">Height:</span>
          {height}cm
        </p>
        <p>
          <span className="strong">Birth:</span>
          <span>{birth.toDateString()}</span>
        </p>
      </div>
    </div>
  );
};

export default IdCard;
