import { useEffect, useState } from "react";
import Card from "./Components/Card";
import { pairArray } from "./util";
import "./styles.css";

export default function App() {
  const [pairs, setPairs] = useState(pairArray);
  const [selectedCount, setSelectedCount] = useState(0);

  const handleClick = (id) => {
    const currentPairs = [...pairs];
    currentPairs.map((e) => {
      if (e.id === id && !e.found) {
        if (!e.show) {
          if (selectedCount < 2) {
            e.show = true;
            setSelectedCount((prev) => prev + 1);
          }
        } else {
          e.show = false;
          setSelectedCount((prev) => prev - 1);
        }
        return e;
      }
      return e;
    });
    setPairs(currentPairs);
    checkPairs();
  };

  const unshowAll = () => {
    setTimeout(() => {
      setPairs((prev) => prev.map((e) => ({ ...e, show: false })));
      setSelectedCount(0);
    }, 1000);
  };

  const setFound = (firstId, secondId) => {
    const newPairs = [...pairs];
    newPairs.forEach((e) => {
      if (e.id === firstId || e.id === secondId) {
        e.found = true;
      }
    });
    setPairs(newPairs);
  };

  const checkPairs = () => {
    const showedElements = pairs.filter((e) => e.show);
    if (showedElements.length === 2) {
      const [firstElement, secondElement] = showedElements;
      if (firstElement.val === secondElement.val) {
        setFound(firstElement.id, secondElement.id);
      }
      unshowAll();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setPairs((prev) => prev.map((e) => ({ ...e, show: false })));
    }, 2000);
  }, []);

  return (
    <div className="App">
      {selectedCount}
      <div className="container">
        {pairs.map((pair) => (
          <Card
            key={pair.id}
            onClick={() => handleClick(pair.id)}
            pair={pair}
          />
        ))}
      </div>
    </div>
  );
}
