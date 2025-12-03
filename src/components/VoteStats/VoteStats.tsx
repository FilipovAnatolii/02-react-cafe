import styles from "./VoteStats.module.css";
import type { VoteStatsProps } from "../../types/votes";

const VoteStats = ({ good, neutral, bad, total, positive }: VoteStatsProps) => {
    return (
        <div className={styles.container}>
            <p className={styles.stat}>
                Good: <strong>{good}</strong>
            </p>
            <p className={styles.stat}>
                Neutral: <strong>{neutral}</strong>
            </p>
            <p className={styles.stat}>
                Bad: <strong>{bad}</strong>
            </p>
            <p className={styles.stat}>
                Total: <strong>{total}</strong>
            </p>
            <p className={styles.stat}>
                Positive: <strong>{positive}%</strong>
            </p>
        </div>
    );
};

export default VoteStats;
