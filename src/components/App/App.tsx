import { useState } from "react";
import CafeInfo from "../CafeInfo/CafeInfo";
import Notification from "../Notification/Notification";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";


function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const total = good + neutral + bad;
    const positive = total ? Math.round((good / total) * 100) : 0;

    const handleVote = (option: "good" | "neutral" | "bad") => {
        switch (option) {
            case "good":
                setGood((prev) => prev + 1);
                break;
            case "neutral":
                setNeutral((prev) => prev + 1);
                break;
            case "bad":
                setBad((prev) => prev + 1);
                break;
        }
    };

    const handleReset = () => {
        setGood(0);
        setNeutral(0);
        setBad(0);
    }

    return (
        <div>
            <CafeInfo />

            <VoteOptions
                onVote={handleVote}
                onReset={handleReset}
                canReset={total > 0}
            />

            {total === 0 ? (
                <Notification />
            ) : (
                <VoteStats
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={total}
                    positive={positive}
                />
            )}
        </div>
    );
}

export default App;