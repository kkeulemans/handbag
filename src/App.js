import React from 'react';
import Navigation from "./components/buttons";
import Bag from "./components/bags";
import './App.css';
import bag_1 from './assets/bag_1.png'
import bag_2 from './assets/bag_2.png'
import bag_3 from './assets/bag_3.png'
import bag_4 from './assets/bag_4.png'
import Tile from "./components/Tile";
import brand from './assets/brand.png'
import our_story from './assets/our_story.png'
function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Navigation
                    buttonName="to the collection"
                    disabled={false}/>

                <Navigation
                    buttonName="shop all bags"
                    disabled={false}/>

                <Navigation
                    buttonName="pre-orders"
                    disabled={true}/>
            </nav>
            <main>
                <Bag
                    naam="The handy bag"
                    prijs="€400,-"
                    image={bag_1}
                />

                <Bag
                    naam="The stylish bag"
                    prijs="€250,-"
                    image={bag_2}
                />
                <Bag
                    naam="The simple bag"
                    prijs="€300,-"
                    image={bag_3}
                />
                <Bag
                    naam="The trendy bag"
                    prijs="€150,-"
                    image={bag_4}
                />

            </main>

            <footer>
                <Tile info="The Brand"
                      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum
            explicabo reprehenderit optio amet ab temporibus asperiores quasi
            cupiditate.
            Voluptatum ducimus voluptates voluptas?" />
                <Tile id="img1" image={brand} alttext="brand image"/>

                <Tile id="img2" image={our_story} alttext="designers"/>
                <Tile info="Our Story"
                      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
            minus molestiae vel beatae natus eveniet ratione temporibus aperiam
            harum alias officiis assumenda officia quibusdam deleniti"/>


            </footer>
        </>
    );
}

export default App;



