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
          src="/All_Business_All_The_Time.jpg"
          alt="A teapot that is all business"
          filter="hudson"
          inspiredId={inspiredId}
          setInspiredId={setInspiredId}
        />
      </GridItem>
      <GridItem>
        <ImagePreview
          src="/Cool_Guys_Dont_Look_At_Explosions.jpg"
          alt="A teapot with gaze averted"
          filter="lark"
          inspiredId={inspiredId}
          setInspiredId={setInspiredId}
        />
      </GridItem>
      <GridItem>
        <ImagePreview
          src="/Power_Pose.jpg"
          alt="A teapot boldly striking a pose"
          filter="nashville"
          inspiredId={inspiredId}
          setInspiredId={setInspiredId}
        />
      </GridItem>
      <GridItem>
        <ImagePreview
          src="/Hashtag_No_Filter.jpg"
          alt="A teapot au naturale"
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
