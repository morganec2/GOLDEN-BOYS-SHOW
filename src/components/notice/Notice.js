import "./notice.css";

const Notice = ({ id }) => {
  return (
    <div id={id} className="notice">
      <h2>Qu'en disent les client(e)s ?</h2>
      <a
        className="avis"
        href="https://www.facebook.com/goldenboys.show/posts/pfbid0Xt52X9rVrwsoJQm9EkGjseAWt78CDQnEtHZHEACLK5x68g7JL4PPH8PrtwfhBPzal"
        target="_blank"
        rel="noopener noreferrer"
      >
        Voir les avis clients sur Facebook
      </a>
    </div>
  );
};

export default Notice;
