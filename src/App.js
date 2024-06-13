export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}
function Logo() {
  return <h1>🌴Far Away💼</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for the Trip..?</h3>
    </div>
  );
}
function PackingList() {
  return <div className="list"></div>;
}
function Stats() {
  return (
    <footer className="stats">
      <em>💼 you have x item on your list and you already packe x (x%)</em>
    </footer>
  );
}
