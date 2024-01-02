'use client'
import { useEffect, useState } from 'react';

const Home = () => {
  const [sessionData, setSessionData] = useState({});

  const fetchSessionData = async () => {
    try {
      const response = await fetch('http://localhost/test/index.php');
      const result = await response.json();
      // console.log(result)
        setSessionData(result);
    } catch (error) {
      console.error('Error fetching session data:', error);
    }
  };

  useEffect(() => {
    fetchSessionData();
  }, []);

  return (
    <div>
    <button onClick={fetchSessionData}>Get pfp session</button>
      <h1>user_id= {sessionData.user_id}</h1>
      <h1>Email= {sessionData.email}</h1>
    </div>
  );
};

export default Home;
