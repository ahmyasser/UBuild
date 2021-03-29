import React, {useEffect} from "react";
import Unity, { UnityContext } from "react-unity-webgl";

import { UnityContainer } from '../../elements/screens/mainScreens/customize/customize'
import { storage } from "../../firebaseConfig";


var unityContext = new UnityContext();

const UnityView = ({selectedData, progression, setProgression, model}) => {

  unityContext.unityConfig={
    loaderUrl:
      model.loaderUrl 
    //'./Build1/40FT GN.loader.js'
    ,
    dataUrl:
      model.dataUrl
    //'./Build1/40FT GN.data'
    ,
    frameworkUrl:
      model.frameworkUrl
    //'./Build1/40FT GN.framework.js'
    ,
    codeUrl:
      model.codeUrl
    //'./Build1/40FT GN.wasm'
    ,
    streamingAssetsUrl: "StreamingAssets",
    companyName: "DefaultCompany",
    productName: "TinyHome",
    productVersion: "0.1"
    
  }
  
  unityContext.on("progress", progress => { setProgression(progress);});
  
  useEffect(() => {
    const sendToUnity = async ()=> {
      if(selectedData.NormalMap&&
        selectedData.NormalMap!=='None' &&
        selectedData.MainTexture&&
        selectedData.MainTexture!=='None' &&         
        selectedData.NormalMap.length <90){
        const normalMap = await storage.ref(`Textures/${selectedData.NormalMap}`).getDownloadURL();    
        const mainTexture= await storage.ref(`Textures/${selectedData.MainTexture}`).getDownloadURL();    
        selectedData.NormalMap1=selectedData.NormalMap;
        selectedData.MainTexture1=selectedData.MainTexture;
        selectedData.NormalMap=normalMap;
        selectedData.MainTexture=mainTexture;
      }
      unityContext.send(
        'Canvas',
        'ChangeMaterial',
        JSON.stringify(selectedData)
      );
    }
    sendToUnity();
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedData])
  


  return (
    <UnityContainer>
      { (progression<1)&& `Loading ${ Math.floor(progression * 100)} percent...`}    
     <Unity unityContext={unityContext} width='100%' height='74vh' className="my-unity-app" />
     </UnityContainer>
  );
}

export default UnityView;

