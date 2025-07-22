import Header from "./components/Header"; 
import Entry from "./components/Entry";
import Contact from "./components/Contact";
import Joke from "./components/Joke";
import data from "./data"

const dataElements = data.map((entry)=>{return <Entry entry={entry} key={entry.id} /> }) 
export default function App(){
 return(<>
<Header />
<main className="container">
  {dataElements}
 </main>
 </>
 );
}







