import "./Home.css";
function Cards() {
  return (
    <>
      <div className="cardContainer">
        <div className="cards">
          <span>Shortcuts</span>
          <ul>
            <li>Members</li>
            <li>Record Contribution</li>
            <li>Recieve Payment</li>
            <li>Group Documents</li>
            <li>Record Expense</li>
          </ul>
        </div>
        <div className="cards">
          <span>Contributions</span>
        </div>
        <div className="cards">
          <span>Loans</span>
        </div>
        <div className="cards">
          <span>Fines</span>
        </div>
        <div className="cards">
          <span>Analytic 1</span>
        </div>
        <div className="cards">
          <span>Analytic 2</span>
        </div>
      </div>
    </>
  );
}

export default Cards;
