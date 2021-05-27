import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {
        Form,
        Button,
} from 'react-bootstrap';


import  Snackbar from '@material-ui/core/Snackbar';
import IconButton from  '@material-ui/core/IconButton';

export class EditDiamond extends Component{
        constructor(props){
            super(props);
            // const {depname,depid} = this.props.match.params ;
            // this.depname = this.props.match.params.depname;
            // this.depid = this.props.match.params.depid
            this.state ={snackbaropen: false, snackbarmsg:' '};
            this.handleSubmit = this.handleSubmit.bind(this); 
           
            // console.log(depname);
           console.log(props.match.params);
        }

        snackbarClose =(event) =>{
            this.setState({snackbaropen:false});

        };

        handleSubmit(event){
            event.preventDefault();
                
                fetch('http://localhost:61888/api/department',{
                method:'PUT',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                    body:JSON.stringify({
                        DepartmentID:event.target.DepartmentID.value,
                        DepartmentName:event.target.DepartmentName.value
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

                let {depname,depid} = this.props.match.params;

                console.log(depname);

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
                      <Form.Control type="text" 
                                    name="DepartmentName" 
                                    required
                                    defaultValue={depname}  
                                    placeholder="DepartmentName" />
                                    
                    </Form.Group>

                    <Form.Group controlId="DepartmentID">
                      <Form.Label>Department ID</Form.Label>
                      <Form.Control type="text"     
                                    name="DepartmentID"
                                    disabled
                                    defaultValue={depid} 
                                    required placeholder="DepartmentID" 
                                    />
                    </Form.Group>
                    
        
                    <Button variant="primary" type="submit">
                      Edit
                    </Button>
                    <Link to="/department"><Button variant="danger" className="ml-2"> Cancel</Button></Link>
                  </Form>  
                  </div>
                )
            }

            
}