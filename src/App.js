import Dialog from './components/Dialog';
import StarRating from './components/StarRating';
import { useState } from "react";

function App() {
      const[isVisible, setVisibility] = useState(false);
  
      const modalVisibility = () => {
          setVisibility(!isVisible)
      }

  return (
    <div class container>
      <main>
        <StarRating />
         <Dialog 
          modalVisibility={modalVisibility} 
          visibilityClass={isVisible ? "visible" : "hidden"} 
        />
      </main>
        <button className="openDialog" onClick={modalVisibility}>Open dialog</button>
    </div>
  );
}

export default App;
