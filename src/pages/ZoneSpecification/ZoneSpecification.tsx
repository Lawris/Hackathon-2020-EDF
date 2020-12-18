import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@material-ui/core';
import React, {Component} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import imgcorse from './img-corse-map.png'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      position: 'absolute',
        top: '17%',
        left: '20%',
    },
    formControl: {
      margin: theme.spacing(3),
    },
    imgmap:{
        position: 'absolute',
        right: '20%',
        top: '17%',
    },
    buttonZone:{
        position: 'absolute',
        left: '30%',
        bottom: '25%',
    }
  }),
);

export default function Zone (){
  const classes = useStyles();
  return( 
        <div>
            <img className={classes.imgmap} src={imgcorse} alt="image map corse"/>
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Sélectionner la ou les zone(s) d'intervention</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                        value="BOGB"
                        control={<Checkbox color="primary" />}
                        label="BOGB - Grand Bastia"
                        />
                        <FormControlLabel
                        value="BOCPO"
                        control={<Checkbox color="primary" />}
                        label="BOCPO - Corte/Ghisonaccia"
                        />
                        <FormControlLabel
                        value="BOBA"
                        control={<Checkbox color="primary" />}
                        label="BOBA - Balagne"
                        />
                        <FormControlLabel
                        value="BOES"
                        control={<Checkbox color="primary" />}
                        label="BOES - Extrême Sud"
                        />
                        <FormControlLabel
                        value="BOVA"
                        control={<Checkbox color="primary" />}
                        label="BOVA - Valincu"
                        />
                        <FormControlLabel
                        value="BOGA"
                        control={<Checkbox color="primary" />}
                        label="BOGA - Grand Ajaccio"
                        />
                    </FormGroup>
                </FormControl>
            </div>
          <br/><br/>
          <Button className={classes.buttonZone} variant="contained" color="primary" href="#contained-buttons">
            Confirmer
          </Button>
        </div>
  )
}
