import styles from "./BoardBg.module.css";

const BoardBg = () => {
  const board = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];

  const imageClassname = (id) => {
    return id % 2 === 0 ? styles.img_rot : "";
  };

  const cellColorClassname = (id) => {
    return id % 2 === 0 ? styles.block_color_light : styles.block_color_dark;
  };

  return (
    <div className={styles.main}>
      {board.map((row, i) => {
        return (
          <div className={styles.row} key={i}>
            {row.map((cell, j) => {
              return (
                <div
                  className={`${styles.cell} ${cellColorClassname(i + j)}`}
                  key={j}
                >
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