import React, {useState, useRef} from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });

    const nameInput = useRef(null);

    const {name, nickname} = inputs;

    const onChange = (e) => {
        const {name, value} = e.target;

        setInputs({
            ...inputs,
            [name]: value
        });
    }
    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
        nameInput.current.focus();

    }

    return (
        <div>
            <input name="name" onChange={onChange} value={name} ref={nameInput} placeholder="이름을 입력해주세요."/>
            <input name="nickname" onChange={onChange} value={nickname} placeholder="닉네임을 입력해 주세요."/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;