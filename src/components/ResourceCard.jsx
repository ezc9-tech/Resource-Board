export default function ResourceCard(props) {
    const {image, title, description, link, alt} = props;
    return (
        <div className="card">
            <img src={image} alt={alt} />
            <h3>{title}</h3>
            <p>{description}</p>
            <button><a href={link}>Visit Resource</a></button>
        </div>
    )
}