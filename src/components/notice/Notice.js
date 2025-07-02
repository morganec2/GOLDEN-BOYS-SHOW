import "./notice.css";

const Notice = ({ id }) => {
  return (
    <div id={id} className="notice">
      <h2>Qu'en disent les client(e)s ?</h2>
      <a
        className="avis"
        href="https://www.facebook.com/goldenboysx/posts/pfbid02bvT559CzD7wf9NwYkCvddmLVwYEW4gaVAprKdLvFLaabbVdPkjRq3zxFnkgL8XN4l"
        target="_blank"
        rel="noopener noreferrer"
      >
        Voir les avis clients sur Facebook
      </a>
    </div>
  );
};

export default Notice;
