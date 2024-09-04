import Hero from "./components/Hero";
import Generator from "./components/Generator";
import Workout from "./components/Workout";
import { useState } from "react";
import generateWorkout from "./utils/functions";

function App() {
  const [workOut,setWorkOut] = useState(null)
  const [poison, setPoison] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState("strength_power");

  function updateWorkout(){
    if(muscles.length < 1){
      return
    }

    let newWorkout = generateWorkout ({poison,muscles,goal})
    console.log(newWorkout)
    setWorkOut(newWorkout)
  }

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-t from-slate-800 to-slate-950 text-white">
      <Hero/>
      <Generator 
        poison={poison}
        setPoison={setPoison}
        muscles={muscles}
        setMuscles={setMuscles}
        goal={goal}
        setGoal={setGoal}
        updateWorkout={updateWorkout}
      />
      {workOut && <Workout workOut={workOut }/>}
    </main>
  );
}

export default App;
