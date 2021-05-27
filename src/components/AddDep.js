import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {
        Form,
        Button,
} from 'react-bootstrap';

import  Snackbar from '@material-ui/core/Snackbar';
import IconButton from  '@material-ui/core/IconButton';


export class AddDep extends Component{
        constructor(props){
            super(props);

            this.state ={snackbaropen: false, snackbarmsg:' '};
            this.handleSubmit = this.handleSubmit.bind(this); 
        }

        snackbarClose =(event) =>{
            this.setState({snackbaropen:false});

        };

        handleSubmit(event){
            event.preventDefault();
                
                fetch('http://localhost:61888/api/department',{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                    body:JSON.stringify({
                        DepartmentID:null,
                        DepartmentName: event.target.DepartmentName.value
                    })
                })
                .then(res=>res.json())
                .then((result)=>
                {
                    //alert(result);
                    this.setState({snackbaropen:true, snackbarmsg:result});
                },
                (error)=>{
                  // alert('Faild')
                    this.setState({snackbaropen:true, snackbarmsg:'Faild'});
                }
                )
            }
    render(){
        return(
            <div className="container">
            <Snackbar anchorOrigin={{vertical:'bottom', horizontal:'center'}}
            open = {this.state.snackbaropen} 
            autoHideDuration = {1000}
            onClose={this.snackbarClose}
            
            message = {<span id ="message-id">{this.state.snackbarmsg}</span>}
            action={[
            <IconButton key ="close" arial-label="Close" color="inherit" onClick={this.snackbarClose} >
                x
            </IconButton>

            ]}
            />

            <Form className="mt-5" onSubmit={this.handleSubmit}>
            <Form.Group controlId="DepartmentName">
              <Form.Label>Department Name</Form.Label>
              <Form.Control type="text" placeholder="DeparmentName" />
            </Form.Group>

            <Button variant="primary" type="submit">
              ADD
            </Button>
            <Link to="/department"><Button variant="danger" className="ml-2"> Cancel</Button></Link>
          </Form>  
          </div>
 
                   

        )
    }
}