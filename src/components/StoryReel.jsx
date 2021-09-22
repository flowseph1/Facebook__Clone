import React from "react";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      {/* Story */}
      <Story
        image="https://pm1.narvii.com/7002/0d3e3f148b99fde7ade039425f30d93df4471c80r1-2048-2048v2_hq.jpg"
        profileSrc="https://www.w3schools.com/howto/img_avatar2.png"
        tittle="Alexandra"
      />
      <Story
        image="https://i.pinimg.com/originals/fc/3b/61/fc3b616fb01bcd3f35bd104992900315.jpg"
        profileSrc="https://cooperativadepica.cl/wp-content/uploads/2018/07/avatar2.png"
        tittle="Alejandro"
      />
      <Story
        image="https://pbs.twimg.com/media/D6uc2kBX4AAv3xV.jpg"
        profileSrc="https://scme.mx/wp-content/uploads/2020/06/img_avatar.png"
        tittle="Roberto"
      />
      <Story
        image="https://i.ytimg.com/vi/dQxgV4oD4J4/maxresdefault.jpg"
        profileSrc="https://empresas.wizad.mx/assets/global/images/avatars/avatar2_big.png"
        tittle="Alexandra"
      />
      <Story
        image="https://tresubresdobles.com/wp-content/uploads/2019/08/skft-912381dcd5b2c45c4a9ce8acf32cfd8c-768x961.jpg"
        profileSrc="https://empresas.wizad.mx/assets/global/images/avatars/avatar5_big.png"
        tittle="Jessica"
      />
    </div>
  );
}

export default StoryReel;
