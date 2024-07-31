import Sidebar from "../../Sidebar/Sidebar"
import Singlepost from "../../Singlepost/Singlepost"
import "./single.css";

export default function Single() {
  return (
    <div className="single">
      <Singlepost />
      <Sidebar />
      
    </div>
  );
}