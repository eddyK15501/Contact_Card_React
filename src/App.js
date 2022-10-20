import React, { useEffect, useState } from "react";
import "./App.css";
import ContactCard from "./components/ContactCard.js";

const App = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://randomuser.me/api/?results=10"
      );

      const data = await response.json();

      setResults(data.results);
      console.log(data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {results.map((result, index) => (
        <ContactCard
          key={index}
          result={result}
        ></ContactCard>
      ))}
    </div>
  );
};

export default App;
