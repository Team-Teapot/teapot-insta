import React from 'react';
import { Grid, GridItem } from './Grid';

export function InstaGallery() {
  return (
    <Grid>
      <GridItem>
        <div className="bg-blue-300">
          <img src="/Art.jpg" alt="Art!"/>
        </div>
      </GridItem>
      <GridItem>
        <div className="bg-blue-300">
          <img src="/Family_Photo.jpg" alt="Family of teapots"/>
        </div>
      </GridItem>
      <GridItem>
        <div className="bg-blue-300">
          <img src="/Teapot_on_Windowsill.jpg" alt="Teapot on a windowsill"/>
        </div>
      </GridItem>
      <GridItem>
        <div className="bg-blue-300">
          <img src="/Art.jpg" alt="Art!"/>
        </div>
      </GridItem>
      <GridItem>
        <div className="bg-blue-300">
          <img src="/Family_Photo.jpg" alt="Family of teapots"/>
        </div>
      </GridItem>
      <GridItem>
        <div className="bg-blue-300">
          <img src="/Teapot_on_Windowsill.jpg" alt="Teapot on a windowsill"/>
        </div>
      </GridItem>
      <GridItem>
        <div className="bg-blue-300">
          <img src="/Art.jpg" alt="Art!"/>
        </div>
      </GridItem>
      <GridItem>
        <div className="bg-blue-300">
          <img src="/Family_Photo.jpg" alt="Family of teapots"/>
        </div>
      </GridItem>
      <GridItem>
        <div className="bg-blue-300">
          <img src="/Teapot_on_Windowsill.jpg" alt="Teapot on a windowsill"/>
        </div>
      </GridItem>
    </Grid>
  );
}
