import './App.css';
import Clock from './myComponents/clock';
import * as c from './myComponents/components';
import * as L from './myComponents/State and Life Cycle';
import * as H from './myComponents/Handling Events';
import * as R from './myComponents/Conditional Rendering';
import * as K from './myComponents/List and Keys';
import * as F from './myComponents/Form';
import * as Lift from './myComponents/Lifting Up State';
import * as composition from './myComponents/composition vs inheritance';

function App(){
  return(
    <>
      <Clock />
      <c.Welcome name = "Anmol Kumar" />
      <c.Message name = "Anmol Kumar" />
      <L.LifeCycle name = "Anmol Kumar" />
      <H.Toogle />
      <R.Greeting isLoggedIn = {false}/>
      <R.GreetingWithNewTechnique isLoggedIn = {true} />
      <K.RenderingMultipleElement />
      <F.Form />
      <Lift.Calculator />
      <composition.WelcomeDialog />
    </>
  );
}

export default App;
