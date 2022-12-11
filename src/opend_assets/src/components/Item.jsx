import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import {Actor,HttpAgent} from "@dfinity/agent"
import { idlFactory } from "../../../declarations/nft";
import {Principal} from "@dfinity/principal"


function Item(props) {
  const [name,setName]= useState();
  const [owner,setOwner] = useState();
  const [image,setImage] = useState();



  const id = Principal.fromText(props.id);
  const localHost = "http://127.0.0.1:8000/?canisterId=r7inp-6aaaa-aaaaa-aaabq-cai";
  const agent = new HttpAgent({host: localHost});


  async function loadNFT(){
    const NFTActor = await Actor.createActor(idlFactory,{
      agent,
      canisterId:id
    });
    const ownerName = await NFTActor.getOwner();
    const name = await NFTActor.getName();
    const NFTimageData = await NFTActor.getAsset();
    const NFTimage = new Uint8Array(NFTimageData);
    const NFTimageURL =  URL.createObjectURL(new Blob ([NFTimage.buffer],{type: "image/png"}))

    setOwner(ownerName.toText());
    setName(name);
    setImage(NFTimageURL);
  };

  //call only first time by using ,[]
  useEffect(()=>{
    loadNFT()
  },[])

  return (
    <div className="disGrid-item">
      <div className="disPaper-root disCard-root makeStyles-root-17 disPaper-elevation1 disPaper-rounded">
        <img
          className="disCardMedia-root makeStyles-image-19 disCardMedia-media disCardMedia-img"
          src={image}
        />
        <div className="disCardContent-root">
          <h2 className="disTypography-root makeStyles-bodyText-24 disTypography-h5 disTypography-gutterBottom">
            {name}<span className="purple-text"></span>
          </h2>
          <p className="disTypography-root makeStyles-bodyText-24 disTypography-body2 disTypography-colorTextSecondary">
            Owner: {owner}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Item;
