import Header from "./components/Header"; 
import Entry from "./components/Entry";
import Contact from "./components/Contact";
import Joke from "./components/Joke";
export default function App(){
 return(<>
 <Joke setup="I'm reading a book on anti-gravity." punchline="It's impossible to put down." />
 <Joke setup="What do you call a fake noodle?" punchline="An impasta." />
 <Joke setup="I told my wife she was drawing her eyebrows too high." punchline="She looked surprised." />
 <Joke setup="Why don't scientists trust atoms?" punchline="Because they make up everything." />
 <Joke setup="My dog used to chase people on a bike a lot." punchline="It got so bad I had to take his bike away." />
 </>
 );
}







