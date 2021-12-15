import styles from "./BoardBg.module.css";

const BoardBg = () => {
  const board = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];

  const imageClassname = (id) => {
    if (id % 2 === 0) {
      return styles.img_rot;
    } else {
      return "";
    }
  };

  return (
    <div className={styles.main}>
      {board.map((row, i) => {
        return (
          <div className={styles.row} key={i}>
            {row.map((cell, j) => {
              return (
                <div className={styles.cell} key={j}>
                  <img
                    src="/line.png"
                    alt="bg-line"
                    width={100}
                    height={100}
                    className={imageClassname(i + j)}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default BoardBg;
