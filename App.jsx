import Header from "./components/Header"; 
import Entry from "./components/Entry";
import Contact from "./components/Contact";
import Joke from "./components/Joke";
import data from "./data"

const dataElements = data.map((entry)=>{return <Entry img={entry.img} title={entry.title} country={entry.country} googleMapsLink={entry.googleMapsLink} dates={entry.dates} text={entry.text} /> }) 

export default function App(){
 return(<>
<Header />
<main className="container">
  {dataElements}
 </main>
 </>
 );
}







