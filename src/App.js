import React, { useState, useEffect, useRef } from "react";
import "./assets/css/style.css";
import Images from "./components/Images.js";

function App() {
  const [title, setTitle] = useState("Hello React");
  const [isShowing, setIsShowing] = useState(false);
  const [didMount, setDidMount] = useState(false);
  const mountRef = useRef(false);

  useEffect(() => {
    setDidMount(true);
    console.log("App mounted");
  }, []);

  useEffect(() => {
    if (mountRef.current) {
      console.log("After mount is showing trigger");
    } else {
      mountRef.current = true;
    }
  }, [isShowing]);

  function handleClick() {
    setIsShowing(!isShowing);
  }

  return (
    <section className="flex justify-center">
      <div className="w-10/12">
        <div className="text-center">
          <div className="my-4">{title}</div>
          <div>
            <button
              className="p-1 bg-blue-700 tet-white my-2"
              onClick={handleClick}
            >
              Toggle image
            </button>
            {isShowing ? <Images /> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { title: "Hello React 2", isShowing: false };
//   }

//   handleClick = () => {
//     this.setState({ isShowing: !this.state.isShowing });
//   };

//   componentDidUpdate() {
//     console.log("App updated");
//   }

//   render() {
//     return (
//       <section className="flex justify-center">
//         <div className="w-1/2">
//           <div className="text-center">
//             <div className="my-4">{this.state.title}</div>
//             <div>
//               <button
//                 className="p-1 bg-blue-700 tet-white my-2"
//                 onClick={this.handleClick}
//               >
//                 Toggle image
//               </button>
//               {this.state.isShowing ? <Images /> : null}
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

export default App;
