import '../../styles/Tags.css'

function Tags({tags}){
    return(
        <section className="tag-section">
            {   tags.map((el) => (
                <article className="tag-item bg-primary text-light">{el}</article>
            )) }
        </section>
    )
}

export default Tags;