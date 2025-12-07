import type { VoteType } from "../../types/votes";

interface VoteOptionsProps {
    onLeaveFeedback: (type: VoteType) => void;
}

export const VoteOptions: React.FC<VoteOptionsProps> = ({ onLeaveFeedback }) => {
    return (
        <div>
            <button onClick={() => onLeaveFeedback("good")}>Good</button>
            <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
            <button onClick={() => onLeaveFeedback("bad")}>Bad</button>
        </div>
    );
};
