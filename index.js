const element = (
  <div className="bg-Container">
    <h1 className="heading">Congratulations</h1>
    <div className="card-Container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="image"
      />
      <h1 className="name-heading">Kiran V</h1>
      <p className="name-Institute">
        Vishnu Institute of Computer Education and Technology Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="watch-image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
