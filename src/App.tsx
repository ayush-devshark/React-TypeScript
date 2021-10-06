import { queryAllByPlaceholderText } from '@testing-library/dom';
import './App.css';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Input from './components/Input';
import Container from './components/Container';
import LoggedIn from './components/state/LoggedIn';
import { ThemeContextProvider } from './components/context/ThemeContext';
import Box from './components/context/Box';
import User from './components/context/User';
import { UserContextProvider } from './components/context/UserContext';
import Counter from './components/class/Counter';
import Private from './components/auth/Private';
import Profile from './components/auth/Profile';
import List from './components/generics/List';
import RandomNumbers from './components/restriction/RandomNumbers';
import Toast from './components/template-literals/Toast';
import CustomButton from './components/html/Button';

function App() {
    // const personName = {
    //     first: 'John',
    //     last: 'Lee',
    // };

    // const nameList = [
    //     {
    //         first: 'John',
    //         last: 'Lee',
    //     },
    //     {
    //         first: 'Rob',
    //         last: 'Williams',
    //     },
    //     {
    //         first: 'Bob',
    //         last: 'Clark',
    //     },
    // ];
    return (
        <div className='App'>
            {/* <Greet name='John' messageCount={20} isLoogedIn={false} /> */}
            {/* <Person name={personName} />
            <PersonList names={nameList} /> */}
            {/* <Status status='loading' /> */}
            {/* <Oscar>
                <Heading>Oscar goes to Will Smith!</Heading>
            </Oscar> */}
            {/* <Button
                handleClick={(e, id) => {
                    console.log('Button Clicked', e, id);
                }}
            ></Button> */}
            {/* <Input
                handleChange={event => {
                    console.log('Changed', event);
                }}
                value=''
            /> */}
            {/* <Container styles={{ border: '1px solid black' }} /> */}
            {/* <LoggedIn /> */}
            {/* <ThemeContextProvider>
                <Box />
            </ThemeContextProvider>
            <UserContextProvider>
                <User />
            </UserContextProvider> */}
            {/* <Counter message='The Count value is: ' /> */}
            {/* <Private isLoggedIn={true} component={Profile} /> */}
            {/* <List
                items={['Batman', 'Superman', 'Green Lantern']}
                onClick={item => console.log(item)}
            />
            <List items={[1, 2, 3]} onClick={item => console.log(item)} /> */}
            {/* <RandomNumbers
                value={10}
                isPositive
                // isNegative={false}
                // isZero
            /> */}
            {/* <Toast position='center' /> */}
            <CustomButton
                variant='secondary'
                onClick={() => console.log('Btn clicked')}
            >
                Primary BTtn
            </CustomButton>
        </div>
    );
}

export default App;
