export type VoteType = "good" | "neutral" | "bad";

export interface VoteOptionsProps {
    onVote: (option: "good" | "neutral" | "bad") => void;
    onReset: () => void;
    canReset: boolean;
}

export interface VoteStatsProps {
        good: number;
        neutral: number;
        bad: number;
        total: number;
        positive: number;
}

export interface Votes {
    good: number;
    neutral: number;
    bad: number;
}



