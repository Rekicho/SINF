import React, { useState, useEffect } from "react";
//import { useHistory } from "react-router-dom";
import Employee2 from '../components/Employees/Employee2';
import Layout from "../components/Templates/Layout";
import Toolbar from "../components/Toolbar/Toolbar";

const EmployeePage = () => {
    const [id, setID] = useState(0);
    const [employees, setEmployees] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    //const history = useHistory();

    useEffect(() => {
        fetch("/api/employees", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                setEmployees(data);
                setID(data[0]["id"]);
                setIsLoading(false);
            })
            .catch(console.log);
    }, []);

    return (isLoading ? <Layout></Layout> :
        (
            <div>
                <Toolbar />
                <Employee2 employee={employees.find(employee => employee.id == id)} />
            </div>
        )
    )
}

export default EmployeePage;