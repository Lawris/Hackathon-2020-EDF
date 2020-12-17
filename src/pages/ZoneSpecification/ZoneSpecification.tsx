import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@material-ui/core';
import React, {Component} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

interface ZoneState {
    [key: string]: any;
}

interface ZoneProps {
    
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }),
);



export default class Zone extends React.Component<ZoneProps, ZoneState>{
    constructor(props: ZoneProps){
        super(props);
        this.state = {
            userMatricule: '',
            userPassword: '',
        }
        const classes = useStyles();   
    }
    render(){
        return <div>
          <div className={classes.root}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Sélectionner la ou les zone(s) d'intervention</FormLabel>
              <FormGroup aria-label="position" row>
                <FormControlLabel
                  value="BOGB"
                  control={<Checkbox color="primary" />}
                  label="BOGB"
                />
                <FormControlLabel
                  value="BOCPO"
                  control={<Checkbox color="primary" />}
                  label="BOCPO"
                />
                <FormControlLabel
                  value="BOBA"
                  control={<Checkbox color="primary" />}
                  label="BOBA"
                />
                <FormControlLabel
                  value="BOES"
                  control={<Checkbox color="primary" />}
                  label="BOES"
                />
                <FormControlLabel
                  value="BOVA"
                  control={<Checkbox color="primary" />}
                  label="BOVA"
                />
                <FormControlLabel
                  value="BOGA"
                  control={<Checkbox color="primary" />}
                  label="BOGA"
                />
              </FormGroup>
          </FormControl>
          </div>  
          <br/><br/>
          <Button variant="contained" color="primary" href="#contained-buttons">
            Confirmer
          </Button><br/><br/>
        </div>
    }

}
