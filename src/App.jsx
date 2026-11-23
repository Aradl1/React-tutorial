import './App.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Card from './Card.jsx';
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx';

function App() {

  const fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Banana", calories: 105 },
    { id: 3, name: "Orange", calories: 62 },
    { id: 4, name: "Strawberry", calories: 4 },
    { id: 5, name: "Pineapple", calories: 50 }
  ];

  const vegetables = [
    { id: 1, name: "Carrot", calories: 25 },
    { id: 2, name: "Broccoli", calories: 31 },
    { id: 3, name: "Potato", calories: 110 },
    { id: 4, name: "Spinach", calories: 7 },
    { id: 5, name: "Celery", calories: 6 }
  ];

  return (
    <>
      <Header />

      <h1>My First React App</h1>
      <p>Learning React with Vite!</p>

      <Card
        title="My First Card"
        description="This is my first card component in React!"
      />

      <Card
        title="Learning React"
        description="I am learning how to use props!"
      />

      <UserGreeting
        isLoggedIn={false}
        username="Austin"
      />

      <List
        category="Fruits"
        items={fruits}
      />

      <List
        category="Vegetables"
        items={vegetables}
      />

      <Footer />
    </>
  );
}

export default App;