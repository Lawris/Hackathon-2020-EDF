import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@material-ui/core';
import React, {Component} from 'react';

interface ZoneState {
    [key: string]: any;
}

interface ZoneProps {
    
}

export default class Zone extends React.Component<ZoneProps, ZoneState>{
    constructor(props: ZoneProps){
        super(props);
        this.state = {
            userMatricule: '',
            userPassword: '',
        }
    }
    render(){
        return <div>
          <FormControl component="fieldset">
            <FormLabel component="legend">Sélectionner la ou les zone(s) d'intervention</FormLabel>
              <FormGroup aria-label="position" row>
                <FormControlLabel
                  value="BOGB"
                  control={<Checkbox color="primary" />}
                  label="BOGB"
                  labelPlacement="end"
                /><br/>
                <FormControlLabel
                  value="BOCPO"
                  control={<Checkbox color="primary" />}
                  label="BOCPO"
                  labelPlacement="end"
                /><br/>
                <FormControlLabel
                  value="BOBA"
                  control={<Checkbox color="primary" />}
                  label="BOBA"
                  labelPlacement="end"
                /><br/>
                <FormControlLabel
                  value="BOES"
                  control={<Checkbox color="primary" />}
                  label="BOES"
                  labelPlacement="end"
                /><br/>
                <FormControlLabel
                  value="BOVA"
                  control={<Checkbox color="primary" />}
                  label="BOVA"
                  labelPlacement="end"
                /><br/>
                <FormControlLabel
                  value="BOGA"
                  control={<Checkbox color="primary" />}
                  label="BOGA"
                  labelPlacement="end"
                /><br/>
              </FormGroup>
          </FormControl><br/>
          <Button variant="contained" color="primary" href="#contained-buttons">
            Confirmer
          </Button>
        </div>
    }

}
