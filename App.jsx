import Header from "./components/Header"; 
import Entry from "./components/Entry";
import Contact from "./components/Contact";
export default function App(){
 return(<>
 <Contact img="./images/mr-whiskerson.png" name="Mr. Whiskerson" number="(212) 555-1234" email="mr.whiskaz@catnap.meow" />
 <Contact img="./images/fluffykins.png" name="Fluffykins" number="(212) 555-2345" email="fluff@me.com"  />
 <Contact img="./images/felix.png" name="Felix" number="(212) 555-4567" email="thecat@hotmail.com" />
  <Contact img="./images/pumpkin.png" name="Pumpkin" number="(0800) CAT KING" email="pumpkin@scrimba.com" />
 </>
 );
}
