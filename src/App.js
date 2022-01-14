import './App.css';
import { SplitScreen } from './components/SplitScreen';

import { RegularList } from './components/RegularList';
import { NumberedList } from './components/NumberedList';
import { LargePersonListItem } from './components/people/LargePersonListItem';
import { SmallPersonListItem } from './components/people/SmallPersonListItem';
import { LargeProductListItem } from './components/products/LargeProductListItem';

const LeftHandComponent = () => <h1 style={{backgroundColor: 'green'}}>Left!</h1>

const RightHandComponent = () => <p style={{backgroundColor: 'red'}}>Right!</p>

const people = [{
	name: 'John Doe',
	age: 54,
	hairColor: 'brown',
	hobbies: ['swimming', 'bicycling', 'video games'],
}, {
	name: 'Brenda Smith',
	age: 33,
	hairColor: 'black',
	hobbies: ['golf', 'mathematics'],
}, {
	name: 'Jane Garcia',
	age: 27,
	hairColor: 'blonde',
	hobbies: ['biology', 'medicine', 'gymnastics'],
}];

const products = [{
	name: 'Flat-Screen TV',
	price: '$300',
	description: 'Huge LCD screen, a great deal',
	rating: 4.5,
}, {
	name: 'Basketball',
	price: '$10',
	description: 'Just like the pros use',
	rating: 3.8,
}, {
	name: 'Running Shoes',
	price: '$120',
	description: 'State-of-the-art technology for optimum running',
	rating: 4.2,
}];

function App() {
  return (
    <>
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent />
        <RightHandComponent />
      </SplitScreen>
      <hr/>
      <RegularList 
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <hr/>
      <NumberedList 
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <hr/>
      <RegularList 
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />
      <hr/>
      <NumberedList 
        items={products}
        resourceName="product"
        itemComponent={LargeProductListItem}
      />
    </>
  );
}

export default App;
