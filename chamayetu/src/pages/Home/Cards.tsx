import "./Home.css";
import LoansChart from "./LoansChart";
import ColumnChart from "./ContributionChart";
function Cards() {
  return (
    <>
      <div className="cardContainer">
        <div className="shortcut cards">
          <span>Shortcuts</span>
          <ul>
            <li>
              <i className="bi bi-people"></i>Members
            </li>
            <li>
              {" "}
              <i className="bi bi-cash-stack"></i>Record Contribution
            </li>
            <li>
              {" "}
              <i className="bi bi-cash-stack"></i>Recieve Payment
            </li>
            <li>
              <i className="bi bi-card-text"></i>Group Documents
            </li>
            <li>
              <i className="bi bi-cash-stack"></i>Record Expense
            </li>
          </ul>
        </div>
        <div className="cards">
          <span>Contributions</span>
          <ul>
            <li>
              {" "}
              <i className="bi bi-bank"></i>Total contribution
            </li>
            <li className="rightAlign">300000</li>
            <hr></hr>
            <li>
              <i className="bi bi-bar-chart-line"></i>Month's Average
            </li>
            <li className="rightAlign">20000</li>
            <hr></hr>
            <li>
              <i className="bi bi-bar-chart-line"></i>Minimum contribution
            </li>
            <li className="rightAlign">1000</li>
            <hr></hr>
          </ul>
        </div>
        <div className="cards">
          <span>Loans</span>
          <ul>
            <li>
              <i className="bi bi-cash-stack"></i>Loans disbursed
            </li>
            <li className="rightAlign">50000</li>
            <hr></hr>
            <li>
              <i className="bi bi-envelope"></i>Loan requests
            </li>
            <li className="rightAlign">5</li>
            <hr></hr>
          </ul>
        </div>
        <div className="cards">
          <span>Fines</span>
          <ul className="finesList">
            <li>
              <i className="bi bi-person"></i>Brian Njiru
            </li>
            <li className="rightAlign">300</li>
            <hr></hr>
            <li>
              <i className="bi bi-person"></i>Ian Ngochi
            </li>
            <li className="rightAlign">1000</li>
            <hr></hr>
            <li>
              <i className="bi bi-person"></i>Denis Munene
            </li>
            <li className="rightAlign">1500</li>
            <hr></hr>
            <li>
              <i className="bi bi-person-add"></i>Add new
            </li>
            <hr></hr>
          </ul>
        </div>
        <div className="cards">
          <span>Column Analytic</span>
          <ColumnChart></ColumnChart>
        </div>
        <div className="chartCard cards">
          <span>Loans Analytic</span>
          <LoansChart></LoansChart>
        </div>
      </div>
    </>
  );
}

export default Cards;
