// import logo from './logo.svg';
import React, {useRef, useState} from 'react';
import './App.css';
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users){
    console.log('활성 사용자 수를 세는중...');
    return users.filter(user => user.active).length;
}

function App() {
    const [inputs, setInputs] = useState({
        username: '',
        email: ''
    });
    const {username, email} = inputs;
    const onChange = e => {
        const {name, value} = e.target;

        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: true
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false
        }
    ]);

    const nextId = useRef(4);
    const onCreate = () => {

        if(!username || !email){
            alert('값을 입력해주세요');
            return;
        }

        const user = {
            id: nextId.current,
            username,
            email
        };
        setUsers([...users, user]);

        setInputs({
            username: '',
            email: ''
        });
        nextId.current += 1;
    }

    const onRemove = id => {
        setUsers(users.filter(v => v.id !== id));
        // setUsers(users.splice(id, 1));
    }

    const onToggle = id => {
        setUsers(users.map(user => user.id === id
            ? {...user, active: !user.active} : user));
    }
    const count = countActiveUsers(users);

    return (
        <>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
            <div>활성사용자 수 : {count}</div>
        </>
    );
}

export default App;