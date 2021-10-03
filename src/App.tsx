import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
    const personName = {
        first: 'John',
        last: 'Lee',
    };

    const nameList = [
        {
            first: 'John',
            last: 'Lee',
        },
        {
            first: 'Rob',
            last: 'Williams',
        },
        {
            first: 'Bob',
            last: 'Clark',
        },
    ];
    return (
        <div className='App'>
            <Greet name='John' messageCount={20} isLoogedIn={false} />
            <Person name={personName} />
            <PersonList names={nameList} />
        </div>
    );
}

export default App;
