import css from "./VoteOptions.module.css";
import type { VoteOptionsProps } from "../../types/votes";
import clsx from "clsx";



export const VoteOptions = ({ onVote, onReset, canReset}: VoteOptionsProps) => {

    return (
        <div className={css.container}>
            <button className={css.button} onClick={() => onVote("good")}>
                Good
            </button>
            <button className={css.button} onClick={() => onVote("neutral")}>
                Neutral
            </button>
            <button className={css.button} onClick={() => onVote("bad")}>
                Bad
            </button>

            <button
                className={clsx(css.button, css.reset, { [css.disabled]: !canReset })}
                onClick={onReset}
                disabled={!canReset}
            >
                Reset
            </button>

        </div>
    );
};

export default VoteOptions;