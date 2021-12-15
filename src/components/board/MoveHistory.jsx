import { useRef, useContext, useEffect } from "react";
import PlayerMoveContext from "../../store/player-move-context";

import styles from "./MoveHistory.module.css";

const MoveHistory = () => {
  const dummy = useRef();
  const { moves } = useContext(PlayerMoveContext);

  useEffect(() => {
    dummy.current.scrollIntoView({ behaviour: "smooth" });
  }, [moves]);

  return (
    <div className={styles.main}>
      <h3>Moves History</h3>
      <table className={styles.move_data_table}>
        <thead>
          <tr>
            <th className={styles.border}>Move</th>
            <th className={styles.border}>Player</th>
            <th className={styles.border}>From</th>
            <th className={styles.border}>To</th>
          </tr>
        </thead>
        <tbody>
          {moves.map((move, index) => (
            <tr key={index} className={styles.color_even}>
              <td className={styles.border}>{index + 1}</td>
              <td className={styles.border}>{move.player}</td>
              <td
                className={styles.border}
              >{`[ ${move.surc[0]}, ${move.surc[1]} ]`}</td>
              <td
                className={styles.border}
              >{`[ ${move.dest[0]}, ${move.dest[1]} ]`}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div ref={dummy}></div>
    </div>
  );
};

export default MoveHistory;
