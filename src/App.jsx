import Accordion from "./components/Accordion/Accordion";

function App() {


  return (
    <main>
      <section>
        <h2>Why work with us?</h2>

        <Accordion className='accordion'>
          <Accordion.Item id="years" className='accordion-item' title="We have been in operation for 20 years">
            <article>
              <p>You can never go wrong with us</p>
              <p>We are here for you to produce the best products</p>
            </article>
          </Accordion.Item>

          <Accordion.Item id="offers" className='accordion-item' title="We have best offers">
            <article>
              <p>Our offers stand out</p>
              <p>We are here for you to produce the best offers in the industry</p>
            </article>
          </Accordion.Item>

          <Accordion.Item id="value" className='accordion-item' title="We have the best value for your money">
            <article>
              <p>Our services are competitve</p>
              <p>We are here for you to produce the best and competive services that you will find out by yourself</p>
            </article>
          </Accordion.Item>

          <Accordion.Item id='experience' className='accordion-item' title="We have been in operation for 20 years">
            <article>
              <p>You can never go wrong with us</p>
              <p>We are here for you to produce the best products</p>
            </article>
          </Accordion.Item>

          <Accordion.Item id="best" className='accordion-item' title="We have best offers">
            <article>
              <p>Our offers stand out</p>
              <p>We are here for you to produce the best offers in the industry</p>
            </article>
          </Accordion.Item>

          <Accordion.Item id="money" className='accordion-item' title="We have the best value for your money">
            <article>
              <p>Our services are competitve</p>
              <p>We are here for you to produce the best and competive services that you will find out by yourself</p>
            </article>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  )
}

export default App;
