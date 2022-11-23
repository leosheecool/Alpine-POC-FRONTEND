import styles from "./NewsCard.module.scss";

type Props = {
  article: {
    title: string;
    image: string;
    authorPicture: string;
  };
};

const NewsCard = ({ article }: Props) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={article.image} alt="foobar" />
      <div className={styles.overlay}></div>
      <div className={styles.info}>
        <img
          className={styles.authorPicture}
          alt=""
          src={article.authorPicture}
        />
        <h3 className={styles.title}>{article.title}</h3>
      </div>
    </div>
  );
};

export default NewsCard;
