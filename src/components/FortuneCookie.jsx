const FortuneCookie = ({ data, textColor }) => {

  return (
    <article className="fortune-cookie" style={{ color: textColor }}>
      <div >
        <p>
          {data.phrase}{" "}
        </p>
        <p>
          {data.author}{" "}
        </p>
      </div>
    </article>
  );
};

export default FortuneCookie;
