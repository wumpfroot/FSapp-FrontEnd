import { useState } from "react";

export const InputForm = () => {
    const [userInput, setUserInput] = useState();
    const [name, setName] = useState();

    return(
        <form 
        onSubmit={(e) => {
            e.preventDefault();
            setName(userInput);
        }}
        >
        <h1>{name}</h1>
        <input onChange={(e) => setUserInput(e.target.value)} />
        <button type="submit">Submit</button>
        </form>
    )
}