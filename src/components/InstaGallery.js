import React, { useState } from 'react';
import { Grid, GridItem } from './Grid';
import { ImagePreview } from './ImagePreview';

export function InstaGallery() {
  const [inspiredId, setInspiredId] = useState(null);

  return (
    <Grid className="p-2">
      <GridItem>
        <ImagePreview
          src="/Art.jpg"
          alt="Art!"
          filter="kelvin"
          inspiredId={inspiredId}
          setInspiredId={setInspiredId}
        />
      </GridItem>
      <GridItem>
        <ImagePreview
          src="/Family_Photo.jpg"
          alt="Family of teapots"
          filter="earlybird"
          inspiredId={inspiredId}
          setInspiredId={setInspiredId}
        />
      </GridItem>
      <GridItem>
        <ImagePreview
          src="/Teapot_on_Windowsill.jpg"
          alt="Teapot on a windowsill"
          filter="gingham"
          inspiredId={inspiredId}
          setInspiredId={setInspiredId}
        />
      </GridItem>
      <GridItem>
        <ImagePreview
          src="/Art.jpg"
          alt="Art!"
          filter="hudson"
          inspiredId={inspiredId}
          setInspiredId={setInspiredId}
        />
      </GridItem>
      <GridItem>
        <ImagePreview
          src="/Family_Photo.jpg"
          alt="Family of teapots"
          filter="lark"
          inspiredId={inspiredId}
          setInspiredId={setInspiredId}
        />
      </GridItem>
      <GridItem>
        <ImagePreview
          src="/Teapot_on_Windowsill.jpg"
          alt="Teapot on a windowsill"
          filter="moon"
          inspiredId={inspiredId}
          setInspiredId={setInspiredId}
        />
      </GridItem>
      <GridItem>
        <ImagePreview
          src="/Art.jpg"
          alt="Art!"
          filter="nashville"
          inspiredId={inspiredId}
          setInspiredId={setInspiredId}
        />
      </GridItem>
      <GridItem>
        <ImagePreview
          src="/Family_Photo.jpg"
          alt="Family of teapots"
          filter="rise"
          inspiredId={inspiredId}
          setInspiredId={setInspiredId}
        />
      </GridItem>
      <GridItem>
        <ImagePreview
          src="/Teapot_on_Windowsill.jpg"
          alt="Teapot on a windowsill"
          filter="valencia"
          inspiredId={inspiredId}
          setInspiredId={setInspiredId}
        />
      </GridItem>
      <GridItem>
        <ImagePreview
          src="/Art.jpg"
          alt="Art!"
          filter="walden"
          inspiredId={inspiredId}
          setInspiredId={setInspiredId}
        />
      </GridItem>
      <GridItem>
        <ImagePreview
          src="/Family_Photo.jpg"
          alt="Family of teapots"
          filter="willow"
          inspiredId={inspiredId}
          setInspiredId={setInspiredId}
        />
      </GridItem>
      <GridItem>
        <ImagePreview
          src="/Teapot_on_Windowsill.jpg"
          alt="Teapot on a windowsill"
          filter="xpro2"
          inspiredId={inspiredId}
          setInspiredId={setInspiredId}
        />
      </GridItem>
    </Grid>
  );
}
