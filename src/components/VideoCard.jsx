import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import datos  from '../db.json'
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles((theme) => ({

  cover: {
    width: "100%",
    backgroundColor: 'black'
  }

}));



  const MediaCard = ({url, color, nombreCategoria})=> {
  const classes = useStyles();


  return (
    <>
    {
                      datos.videos.map((videos, i) => {
                        const { categoria,  urlVideo  } = videos
                        if(categoria === nombreCategoria){
                            return (
                              <Card   className={classes.root}>
                              <CardMedia
                                className={classes.cover}
                                component="iframe"
                                src={urlVideo} 
                                
                                />  
                              </Card>
                            );
                        }  else {
                          return null; 
                        } 
                    })}
    
  
  </>
  );
}
export default  MediaCard 