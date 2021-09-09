import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from "@material-ui/core/styles";
import axios from 'axios';

const useStyles = theme => ({
  avatar: {
    backgroundColor: red[500],
  }
});

class CardComp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  handleDelete = ()=>{
    axios.delete("http://localhost:2020/machstatz/delete_existing_user",{data:{email:this.props.email}}).then((rs)=>{
        if(rs.data.message === "User deleted successfully."){
          console.log("User deleted");
        }else{
          console.log("Not able to delete user");
        }
    })
  }

  render()
  {
    const { classes } = this.props;
    return (
      <Card style={{margin:'3px',width:'250px',height:'80px'}} >
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {this.props.name}
            </Avatar>
          }
          action={
            <div>
              <EditIcon />
              <IconButton aria-label="settings" onClick={this.handleDelete}><DeleteIcon /></IconButton>
            </div>
          }
          title={this.props.fullname}
        />
      </Card>
    );
  }
}

export default withStyles(useStyles)(CardComp);