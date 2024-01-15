import { useState, useRef } from "react";
import Button from "./Button/Button";

function StateVsRef() {
    const input = useRef()
    // const [value, setValue] = useState(""); // если используем useRef, то это можно убрать
    const [show, setShow] = useState(false);

    function handleKeyDown(event) {
        if(event.key === "Enter") {
            setShow(true)
        }
    }

    return (
        <div>
            {/* <h3>Input Value: {show && value}</h3> // если используем useRef, то это можно убрать */} 
            <h3>Input Value: {show && input.current.value}</h3> 
            <input
                ref={input}
                type="text"
                className="control"
                // value={value} // если используем useRef, то это можно убрать
                // onChange={(e) => setValue(e.target.value)} // если используем useRef, то это можно убрать
                onKeyDown={handleKeyDown}
            />
        </div>
    );
}

export default function FeedBackSection() {
    const [form, setForm] = useState({
        name: "",
        hasError: false,
        reason: 'help'
    })
    // const [name, setName] = useState("");
    // const [hasError, setHasError] = useState(true)
    // const [reason, setReason] = useState("help");

    function handleNameChange(event) {
        // setName(event.target.value);
        // setHasError(event.target.value.trim().length === 0)
        setForm(prev => ({...prev, 
            name: event.target.value,
            hasError: event.target.value.trim().length === 0
        }))
    }

    // function toggleError() {
    //     // setHasError((prev) => !prev)
    // }
    return (
        <section>
            <h3>Обратная связь</h3>
            {/* <Button onClick={toggleError}>toggle error</Button> */}
            <form style={{marginBottom: '1rem'}}>
                <label htmlFor="name">Ваше имя</label>
                <input
                    type="text"
                    id="name"
                    className="control"
                    value={form.name}
                    style={{
                        border: form.hasError ? '1px solid red' : null,
                    }}
                    onChange={handleNameChange}
                />

                <label htmlFor="reason">Причина обращения</label>
                <select
                    name=""
                    id="reason"
                    className="control"
                    value={form.reason}
                    onChange={(event) => setForm(prev => ({
                        ...prev,
                        reason: event.target.value
                    }))}
                >
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="suggest">Предложение</option>
                </select>

                {/* <pre>
                    Name: {form.name}
                    <br />
                    Reason: {form.reason}
                </pre> */}
                <Button disabled={form.hasError} isActive={!form.hasError} >Отправить</Button>
                
                
            </form>
            <hr />
            <StateVsRef  />
        </section>
    );
}
