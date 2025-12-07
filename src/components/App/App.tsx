import { useState } from "react";
import type { Votes, VoteType } from "../../types/votes";
import { VoteOptions } from "../VoteOptions/VoteOptions";
import { VoteStats } from "../VoteStats/VoteStats";

export default function App() {
    const [votes, setVotes] = useState<Votes>({
        good: 0,
        neutral: 0,
        bad: 0
    });

    const handleVote = (type: VoteType) => {
        setVotes(prev => ({
            ...prev,
            [type]: prev[type] + 1
        }));
    };

    const totalVotes = votes.good + votes.neutral + votes.bad;
    const positiveRate = totalVotes > 0 ? Math.round((votes.good / totalVotes) * 100) : 0;

    return (
        <div>
            <VoteOptions onLeaveFeedback={handleVote} />

            {totalVotes > 0 && (
                <VoteStats
                    votes={votes}
                    totalVotes={totalVotes}
                    positiveRate={positiveRate}
                />
            )}
        </div>
    );
}
