import React, { useEffect } from "react";
import logo from "../../assets/logo.png";
import {HttpAgent} from "@dfinity/agent"
import { idlFactory } from "../../../declarations/nft";
import {Principal} from "@dfinity/principal"

function Item(props) {
  const id = Principal.fromText(props.id);
  const localHost = "http://127.0.0.1:8000/?canisterId=r7inp-6aaaa-aaaaa-aaabq-cai";
  const agent = new HttpAgent({host: localHost});

  async function loadNFT(){
    const NFTActor = await Actor.createActor(idlFactory,{
      agent,
      canisterId:id
    });
  }
  //call only first time by using ,[]
  useEffect(()=>{
    loadNFT()
  },[])

  return (
    <div className="disGrid-item">
      <div className="disPaper-root disCard-root makeStyles-root-17 disPaper-elevation1 disPaper-rounded">
        <img
          className="disCardMedia-root makeStyles-image-19 disCardMedia-media disCardMedia-img"
          src={logo}
        />
        <div className="disCardContent-root">
          <h2 className="disTypography-root makeStyles-bodyText-24 disTypography-h5 disTypography-gutterBottom">
            CryptoDunks #312<span className="purple-text"></span>
          </h2>
          <p className="disTypography-root makeStyles-bodyText-24 disTypography-body2 disTypography-colorTextSecondary">
            Owner: sdfsdf-erwerv-sdf
          </p>
        </div>
      </div>
    </div>
  );
}

export default Item;
