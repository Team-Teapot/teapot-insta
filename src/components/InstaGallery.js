import React, { useState } from 'react';
import { Grid, GridItem } from './Grid';
import { ImagePreview } from './ImagePreview';

export function InstaGallery() {
  const [inspiredId, setInspiredId] = useState(null);

  return (
    <Grid className="pt-4 pr-2 pl-2 h-full w-full">
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
          src="/Art_2.jpg"
          alt="Freya's beautiful teapot."
          filter="valencia"
          inspiredId={inspiredId}
          setInspiredId={setInspiredId}
        />
      </GridItem>
      <GridItem>
        <ImagePreview
          src="/Matts_Teapot.jpg"
          alt="Teapot, with pleasantly reserved floral pattern, atop a bee print towel."
          filter="willow"
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
          src="/Richards_Patriotic_Teapot.png"
          alt="A teapot that is proud to be British"
          filter="xpro2"
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
          src="/Phillips_Teapot.jpg"
          alt="Teapot owned by our man Phillip"
          filter="rise"
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
    </Grid>
  );
}
