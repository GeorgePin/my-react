import React from "react";
import "./assets/css/style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "Hello React 2 " };
  }
  render() {
    return (
      <section className="flex justify-center">
        <div className="w-1/2">
          <div className="text-center">
            <div className="my-4">{this.state.title}</div>
            <div>
              <button className="p-1 bg-blue-700 tet-white my-2">
                Toggle image
              </button>
              <img src="https://images.unsplash.com/photo-1543933720-b55c838bb109?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
