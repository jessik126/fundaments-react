export default function WithParameter(props){
    console.log(props);
    const status = props.grade >= 7 ? 'Approved' : 'Not approved';
    return (
        <div>
            <h2> {props.title} </h2>
            <p> <strong>{props.studant} </strong> 
            was {status} with the grade {props.grade}
             </p>
        </div>
    )
}