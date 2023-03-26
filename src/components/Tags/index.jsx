import '../../styles/Tags.css'

function Tags({tags}){
    return(
        <section className="tag-section">
            {   tags.map((el,index) => (
                <article key={index} className="tag-item bg-primary text-light">{el}</article>
            )) }
        </section>
    )
}

export default Tags;