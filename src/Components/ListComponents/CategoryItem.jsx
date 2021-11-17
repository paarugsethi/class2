import styles from './List.module.css'

function CategoryItem({
    url,
    title
}){
    return (
        <div className={styles.list}>
            <img className={styles.image} src={url} alt="title" />
            <div>
                <h2>{title}</h2>
            </div>
        </div>
    )
}

export default CategoryItem