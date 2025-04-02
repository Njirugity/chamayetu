import "bootstrap/dist/css/bootstrap.min.css";

//A search bar input that will be used on the members page
function SearchBar() {
  return (
    <div className="input-group" style={{ width: "250px", margin: "20px" }}>
      <input type="text" className="form-control" placeholder="Search..." />
      <span className="input-group-text">
        <i className="bi bi-search"></i>
      </span>
    </div>
  );
}
export default SearchBar;
