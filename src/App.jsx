import Accordion from "./components/Accordion/Accordion";
import SearchableList from "./components/SeachableList/SearchableList";



import savannaImg from './assets/african-savanna.jpg';
import amazonImg from './assets/amazon-river.jpg';
import caribbeanImg from './assets/caribbean-beach.jpg';
import desertImg from './assets/desert-dunes.jpg';
import forestImg from './assets/forest-waterfall.jpg';
import Place from "../Place";

const PLACES = [
  {
    id: 'african-savanna',
    image: savannaImg,
    title: 'African Savanna',
    description: 'Experience the beauty of nature.',
  },
  {
    id: 'amazon-river',
    image: amazonImg,
    title: 'Amazon River',
    description: 'Get to know the largest river in the world.',
  },
  {
    id: 'caribbean-beach',
    image: caribbeanImg,
    title: 'Caribbean Beach',
    description: 'Enjoy the sun and the beach.',
  },
  {
    id: 'desert-dunes',
    image: desertImg,
    title: 'Desert Dunes',
    description: 'Discover the desert life.',
  },
  {
    id: 'forest-waterfall',
    image: forestImg,
    title: 'Forest Waterfall',
    description: 'Listen to the sound of the water.',
  },
];

function App() {


  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className='accordion'>
          <Accordion.Item id="years" className='accordion-item'>
            <Accordion.Title className='accordion-item-title'>We have been in operation for 20 years</Accordion.Title>
            <Accordion.Content className='accordion-item-content'>
              <article>
                <p>You can never go wrong with us</p>
                <p>We are here for you to produce the best products</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>


          <Accordion.Item id="offers" className='accordion-item'>
            <Accordion.Title className='accordion-item-title'>We have best offers</Accordion.Title>
            <Accordion.Content className='accordion-item-content'>
              <article>
                <p>Our offers stand out</p>
                <p>We are here for you to produce the best offers in the industry</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>


          <Accordion.Item id="value" className='accordion-item'>
            <Accordion.Title className='accordion-item-title'>We have the best value for your money</Accordion.Title>
            <Accordion.Content className='accordion-item-content'>
              <article>
                <p>Our services are competitve</p>
                <p>We are here for you to produce the best and competive services that you will find out by yourself</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>

      <section>
        <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
          {(item) => <Place item={item}/>}
        </SearchableList>

        <SearchableList items={['item 1', 'item 2', 'item 3']} itemKeyFn={(item) => item}>
          {(item) => item}
        </SearchableList>
      </section>
    </main>
  )
}

export default App;
