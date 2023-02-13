const Movies = (props) => {
  return (
    <div className="movie">
      <img src={props.img} alt="" />
      <p>{props.title}</p>
      <p> Year: {props.year}</p>
      <p> IMDB Id: {props.imdb}</p>
    </div>
  )
}
export default Movies