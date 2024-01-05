'use client'
import { useEffect, useState } from 'react';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


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


  const [data, setData] = useState([]);
  const [stories, setStories] = useState([]);

  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const postQuery = async (str) => {
    try {
      const postData = {
        query: str,
      };

      const response = await fetch( baseUrl+'/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const jsonData = await response.json();
      return jsonData; // Return the JSON data as a resolved promise
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Re-throw the error for further handling
    }
  };

  const setData1 = async (str, fn) => {
    const data1 = await postQuery(str);
    // console.log(data1)
    fn(data1);
  };

  return (<>
    <div>
    <button onClick={fetchSessionData}>Get pfp session</button>
    <h1>Hi Vimlesh venkat MCS 123</h1>

      <h1>user_id= {sessionData.user_id}</h1>
      <h1>Email= {sessionData.email}</h1>
    </div>

    <div>
      <div>
        <button
          onClick={() =>
            setData1('select title from newsid ORDER BY title DESC', setData)
          }
        >
          Get Run Orders
        </button>
        <div>
          {data.length > 0 && (
            <label htmlFor="comboBox">Select Run Order: </label>
          )}
          <select
            id="comboBox"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="">Select Run Order</option>
            {data?.map((option, index) => (
              <option key={index} value={option.title}>
                {option.title}
              </option>
            ))}
          </select>
          {selectedOption && (
            <h1 style={{ backgroundColor: 'purple', color: 'white' }}>
              Selected Run Order: {selectedOption}
            </h1>
          )}
        </div>
        <button
          onClick={() =>
            setData1(
              `SELECT   script.SlugName, script.Script from script JOIN runorder on script.ScriptID = runorder.ScriptID WHERE runorder.NewsID = '${selectedOption}' and script.newsid = '${selectedOption}'  ORDER by runorder.RunOrder`,
              setStories
            )
          }
        >
          Get Stories
        </button>
      </div>

      <div>
        {stories.map((story, i) => (
          <div key={i}>
            <h2 style={{ backgroundColor: 'yellow' }}>{story.SlugName}</h2>
            <h3>{story.Script}</h3>
          </div>
        ))}
      </div>
    </div>
  </>
  );
};

export default Home;
