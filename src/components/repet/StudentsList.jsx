import React from "react";
import students from '../../data/students.js';

export default props => {
    const studentlist = students.map(student => {
        return (
            <li key={student.id}>
                {student.id}) {student.name} -> {student.grade}
            </li>
        )
    })
    return (
        <div>
            <ul style={{ listStyle: 'none' }}>
                {studentlist}
            </ul>
        </div>
    )
}