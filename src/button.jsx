// import styles from './button.module.css'

function Click(){
    // INLINE CSS 
    const styles = {
        
        backgroundColor:" #61dafb",
        borderRadius: "30px",
        cursor: "pointer",
        
    }
    return(
        <button style={styles}>
            click me
        </button>
    )
}

export default Click