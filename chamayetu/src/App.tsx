import Message from "./Message";
import ListGroup from "./components/ListGroup";
function App() {
  let items = ["Nairobi", "Mombasa", "Nakuru", "Embu", "Moyale"];
  return (
    <div>
      <Message />
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
