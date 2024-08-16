import { useState } from 'react';
import './App.css';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0); // Initialize totalAgility state

  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/f66b97',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56a8c2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/b0f7cc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/54176f',
    },
  ]);

  const calculateTotalStrength = (team) => {
    return team.reduce((total, fighter) => total + fighter.strength, 0);
  };

  const calculateTotalAgility = (team) => {
    return team.reduce((total, fighter) => total + fighter.agility, 0);
  };

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      const updatedTeam = [...team, fighter];
      setTeam(updatedTeam);
      setMoney(money - fighter.price);
      setTotalStrength(calculateTotalStrength(updatedTeam));
      setTotalAgility(calculateTotalAgility(updatedTeam)); // Update totalAgility
    } else {
      console.log('Not enough money');
    }
  };

  const handleRemoveFighter = (index) => {
    const fighterToRemove = team[index];
    const updatedTeam = team.filter((_, i) => i !== index);

    setTeam(updatedTeam);
    setMoney(money + fighterToRemove.price); // Refund the money
    setTotalStrength(calculateTotalStrength(updatedTeam)); // Update totalStrength
    setTotalAgility(calculateTotalAgility(updatedTeam)); // Update totalAgility
  };

  return (
    <div>
      <h1>Zombie Survival Team</h1>
      <p>Current Money: ${money}</p>
      <p>Total Team Strength: {totalStrength}</p>
      <p>Total Team Agility: {totalAgility}</p> {/* Display totalAgility */}

      {/* Display Zombie Fighters */}
      <ul>
        {zombieFighters.map((fighter, index) => (
          <li key={index}>
            <img src={fighter.img} alt={fighter.name} />
            <h3>{fighter.name}</h3>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add to Team</button>
          </li>
        ))}
      </ul>

      <h2>Your Team</h2>

      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <ul>
          {team.map((member, index) => (
            <li key={index}>
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <p>Price: ${member.price}</p>
              <p>Strength: {member.strength}</p>
              <p>Agility: {member.agility}</p>
              <button onClick={() => handleRemoveFighter(index)}>Remove from Team</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;



