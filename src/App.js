import './App.css';

function App() {
  return (
    <div className="App master">
      <header>
        <div className="fade-bottom min-h-[5vh] header"/>
      </header>
        <div className="grid grid-cols-3">
          <div/>
          <div className="flex flex-col justify-center items-center gap-4 text-white text-4xl font-bold mt-[5vh]">
            <h1 className="">Hi, I'm Praj Yakha</h1>
            <p className="">I'm a software engineer</p>
          </div>
          <div/>
      </div>
      <footer>
        <div className="fade-top min-h-[5vh] footer"/>
      </footer>
    </div>
  );
}

export default App;
