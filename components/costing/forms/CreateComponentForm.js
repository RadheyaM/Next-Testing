'use client'
import { useState } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { numLength } from "@/lib/helps";

const CreateComponentForm = () => {

    const [enteredComponentName, setEnteredComponentName] = useState("")
    const [enteredRmc, setEnteredRmc] = useState("");
    const [enteredKgQty, setEnteredKgQty] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [formError, setFormError] = useState({error : false, message: ""});
    
    const inputHandler = (id, e) => {
        setFormError({error: false, message: ""});
        if (id === "componentName") {
            setEnteredComponentName(e.target.value);
        } else if (id === "rmc") {
            setEnteredRmc(e.target.value);
        } else {
            setEnteredKgQty(e.target.value);
        }
    }

    const addIngHandler = () => {
        // data validation
        if (enteredRmc === 0 || enteredRmc === "" || enteredRmc === undefined) {
            setFormError({error: true, message: "RMC cannot be 0 or blank..."})
            return;
        } else if (numLength(enteredRmc) < 5 || numLength(enteredRmc) > 6) {
            setFormError({error: true, message: "RMC length is wrong."})
            return;
        } else if (enteredKgQty === 0 || enteredKgQty === "" || enteredKgQty === undefined) {
            setFormError({error: true, message: "Kg Quantity cannot be 0 or blank..."})
            return;
        }
        setIngredients([
            ...ingredients,
            {
                rmc: enteredRmc,
                qty: enteredKgQty
            },
        ])
        setEnteredRmc(""),
        setEnteredKgQty("")
    }

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <>
        <div>
            <h1>Create Components</h1>
            <form onSubmit={submitHandler}>
                <div className="flex flex-col bg-blue-200">
                    <div className="flex-row p-5 m-5">
                        <TextField
                            onChange={(e) => {
                                inputHandler("componentName", e);
                            }}
                            type="string"
                            id="componentName"
                            value={enteredComponentName}
                            label="Component Name"
                        />
                    </div>
                </div>
                <div className="flex flex-row bg-blue-200">
                    <div className="flex flex-row gap-5 p-5 m-5 items-center">
                        <div>
                            <TextField
                                onChange={(e) => {
                                    inputHandler("rmc", e);
                                }}
                                type="number"
                                id="rmc"
                                value={enteredRmc}
                                label="Raw Material Code"
                            />
                        </div>
                        <div>
                            <TextField
                                onChange={(e) => {
                                    inputHandler("kgQty", e);
                                }}
                                type="number"
                                id="kgQty"
                                value={enteredKgQty}
                                label="Kg Quantity"
                            />
                        </div>
                        <div>
                            <Button onClick={addIngHandler} size="large" variant="contained">Add</Button>
                        </div>
                    </div>
                    {formError.error && <div className="text-red-400 text-xl">{formError.message}</div>}
                </div>
            </form>
            <ul>
                {ingredients.map(ing => (
                    <li key={ing.rmc}>{ing.rmc} | {ing.qty}</li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default CreateComponentForm;