export default function WithParameter(props){
    const status = props.grade >= 7 ? 'Approved' : 'Not approved';
    return (
        <>
            <h2> {props.title} </h2>
            <p> <strong>{props.studant} </strong> 
            was {status} with the grade {props.grade}
             </p>
        </>
    )
}