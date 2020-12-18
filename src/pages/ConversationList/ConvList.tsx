import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import axios from 'axios'

class ConvList extends React.Component {
    state = {
      convos: [],
    }
  
    componentWillMount() {
      axios.get(`https://europe-west1-edf-hackathon-eac15.cloudfunctions.net/getCases?udid=743764387467387600`, {
        headers: { 
            'Content-Type' : 'application/x-www-form-urlencoded'
          },
      })
        .then(res => {
            const convs = res.data;
            console.log(convs);
            this.setState({ convs });
            console.log()
        })
    }
    render() {
      return (
        <ul>
          { this.state.convos.map(convo => <li>{convo}</li>)}
        </ul>
      )
    }
  }
export default ConvList;