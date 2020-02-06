import React from 'react';
import { Grid, GridItem } from './Grid';
import { ImagePreview } from './ImagePreview';

export function InstaGallery() {
  return (
    <Grid className="p-2">
      <GridItem>
        <ImagePreview src="/Art.jpg" alt="Art!" filter="kelvin"/>
      </GridItem>
      <GridItem>
        <ImagePreview src="/Family_Photo.jpg" alt="Family of teapots" filter="earlybird"/>
      </GridItem>
      <GridItem>
        <ImagePreview src="/Teapot_on_Windowsill.jpg" alt="Teapot on a windowsill"  filter="gingham"/>
      </GridItem>
      <GridItem>
        <ImagePreview src="/Art.jpg" alt="Art!"  filter="hudson"/>
      </GridItem>
      <GridItem>
        <ImagePreview src="/Family_Photo.jpg" alt="Family of teapots"  filter="lark"/>
      </GridItem>
      <GridItem>
        <ImagePreview src="/Teapot_on_Windowsill.jpg" alt="Teapot on a windowsill"  filter="moon"/>
      </GridItem>
      <GridItem>
        <ImagePreview src="/Art.jpg" alt="Art!"  filter="nashville"/>
      </GridItem>
      <GridItem>
        <ImagePreview src="/Family_Photo.jpg" alt="Family of teapots"  filter="rise"/>
      </GridItem>
      <GridItem>
        <ImagePreview src="/Teapot_on_Windowsill.jpg" alt="Teapot on a windowsill"  filter="valencia"/>
      </GridItem>
      <GridItem>
        <ImagePreview src="/Art.jpg" alt="Art!"  filter="walden"/>
      </GridItem>
      <GridItem>
        <ImagePreview src="/Family_Photo.jpg" alt="Family of teapots"  filter="willow"/>
      </GridItem>
      <GridItem>
        <ImagePreview src="/Teapot_on_Windowsill.jpg" alt="Teapot on a windowsill"  filter="xpro2"/>
      </GridItem>
    </Grid>
  );
}
