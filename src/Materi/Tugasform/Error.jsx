const ShowError = ({errors}) => {
    return (
        <ul style={{listStyle: 'none', textAlign: 'left', color: 'red'}}>
           {
             errors.map((error, s) => <li key={s}>{error}</li>)
           }
        </ul>
    )
}
export default ShowError;