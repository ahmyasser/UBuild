import React, {useEffect} from "react";
import Unity, { UnityContext } from "react-unity-webgl";

import { UnityContainer } from '../../elements/screens/mainScreens/costumize/costumize'
import { storage } from "../../firebaseConfig";

const Files =localStorage.getItem('model')?JSON.parse(localStorage.getItem('model')):'';

  const unityContext = new UnityContext({
    loaderUrl: './Build1/40FT GN.loader.js' ||Files.loaderUrl,
    dataUrl: './Build1/40FT GN.data' ||Files.dataUrl,
    frameworkUrl:'./Build1/40FT GN.framework.js' ||Files.frameworkUrl,
    codeUrl: './Build1/40FT GN.wasm' ||Files.codeUrl,
    streamingAssetsUrl: "StreamingAssets",
    companyName: "DefaultCompany",
    productName: "TinyHome",
    productVersion: "0.1"
  });


const UnityView = ({selectedData, progression, setProgression}) => {
  
  
  
  unityContext.on("progress", progress => { setProgression(progress);});
  //const savedCart =localStorage.getItem('savedCart')?JSON.parse(localStorage.getItem('savedCart')):'';

 

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
  }, [selectedData])
  


  return (
    <UnityContainer>
      { (progression<1)&& `Loading ${ Math.floor(progression * 100)} percent...`}    
     <Unity unityContext={unityContext} width='100%' height='74vh' className="my-unity-app" />
     </UnityContainer>
  );
}

export default UnityView;

