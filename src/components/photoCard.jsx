function PhotoCard({
  id,
  title,
  description,
  category,
  image,
  alt,
  favorite,
  onUsun,
  onPrzelacz,
}) {
  return (
    <div className="card h-100">
      <div className="position-relative">
        <img src={image} className="card-img-top" alt={alt || title} />
        <button
          type="button"
          className="btn btn-light btn-sm position-absolute top-0 end-0 m-2 rounded-circle border-0 shadow-sm"
          onClick={onPrzelacz}
          aria-label="Ulubione"
        >
          {favorite ? (
            <i className="bi bi-star-fill text-warning" />
          ) : (
            <i className="bi bi-star" />
          )}
        </button>
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-body-secondary">{category}</small>
        </p>
        <div className="d-flex gap-2 mt-auto">
          <button
            type="button"
            className="btn btn-outline-primary flex-fill"
            data-bs-toggle="modal"
            data-bs-target={`#zdjecie${id}`}
          >
            Powiększ
          </button>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={onUsun}
          >
            Usuń
          </button>
        </div>
      </div>
    </div>
  )
}

export default PhotoCard