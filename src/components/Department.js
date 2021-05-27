import React,{Component} from 'react';
import {Table, Button, ButtonToolbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
 
export class Department extends Component{
 
    constructor(props){
        super(props);
        this.state={deps:[]}
        this.depid='';
        this.depname='';
    }
 
    componentDidMount(){
        this.refreshList();
    }
 
    refreshList(){
        fetch('http://localhost:61888/api/department')
        .then(response=> response.json())
        .then(data =>{
            this.setState({deps:data});
        }
        );
    }
 
   
    render(){
        // const {deps, depid, depname} = this.state;  ----- sayup ni
        const { deps } = this.state;

        return(
            <div className= "Container">
            <Table className="mt-5" striped bordered hover size="sm">
             <thead>
                 <tr>
                     <th>DepartmentID</th>
                     <th>DepartmentName</th>
                     <th>Option</th>
                 </tr>
            </thead>   
            <tbody>
 
                {deps.map(dep=>
            
                    <tr key={dep.DepartmentID}>
                        <td>{dep.DepartmentID}</td>
                        <td>{dep.DepartmentName}</td>
                        <td>
 
                        <ButtonToolbar>
                        <Link to={`/EditDiamond/${dep.DepartmentID}/${dep.DepartmentName}`}>                         <Button className="mr-2" variant="info"
                        >Edit</Button>
                        </Link>
                       </ButtonToolbar>
                        </td>
                    </tr>
                    )}
            </tbody>
            
         </Table>
            <ButtonToolbar>
            <Link to="/AddDep"><Button variant="primary"> Add Department</Button></Link>                   
            </ButtonToolbar>
            </div>
        )  
    }
}