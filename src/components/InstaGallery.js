import React from 'react';
import { Grid, GridItem } from './Grid';
import { ImagePreview } from './ImagePreview';

export function InstaGallery() {
  return (
    <Grid>
      <GridItem>
        <div className="bg-blue-300">
          <ImagePreview src="/Art.jpg" alt="Art!" filter="kelvin"/>
        </div>
      </GridItem>
      <GridItem>
        <div className="bg-blue-300">
          <ImagePreview src="/Family_Photo.jpg" alt="Family of teapots" filter="earlybird"/>
        </div>
      </GridItem>
      <GridItem>
        <div className="bg-blue-300">
          <ImagePreview src="/Teapot_on_Windowsill.jpg" alt="Teapot on a windowsill"  filter="gingham"/>
        </div>
      </GridItem>
      <GridItem>
        <div className="bg-blue-300">
          <ImagePreview src="/Art.jpg" alt="Art!"  filter="hudson"/>
        </div>
      </GridItem>
      <GridItem>
        <div className="bg-blue-300">
          <ImagePreview src="/Family_Photo.jpg" alt="Family of teapots"  filter="lark"/>
        </div>
      </GridItem>
      <GridItem>
        <div className="bg-blue-300">
          <ImagePreview src="/Teapot_on_Windowsill.jpg" alt="Teapot on a windowsill"  filter="moon"/>
        </div>
      </GridItem>
      <GridItem>
        <div className="bg-blue-300">
          <ImagePreview src="/Art.jpg" alt="Art!"  filter="nashville"/>
        </div>
      </GridItem>
      <GridItem>
        <div className="bg-blue-300">
          <ImagePreview src="/Family_Photo.jpg" alt="Family of teapots"  filter="rise"/>
        </div>
      </GridItem>
      <GridItem>
        <div className="bg-blue-300">
          <ImagePreview src="/Teapot_on_Windowsill.jpg" alt="Teapot on a windowsill"  filter="valencia"/>
        </div>
      </GridItem>
      <GridItem>
        <div className="bg-blue-300">
          <ImagePreview src="/Art.jpg" alt="Art!"  filter="walden"/>
        </div>
      </GridItem>
      <GridItem>
        <div className="bg-blue-300">
          <ImagePreview src="/Family_Photo.jpg" alt="Family of teapots"  filter="willow"/>
        </div>
      </GridItem>
      <GridItem>
        <div className="bg-blue-300">
          <ImagePreview src="/Teapot_on_Windowsill.jpg" alt="Teapot on a windowsill"  filter="xpro2"/>
        </div>
      </GridItem>
    </Grid>
  );
}
