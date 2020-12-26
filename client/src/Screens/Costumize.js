//import {Link} from 'react-router-dom';
import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "../Build/Test2.loader.js",
    dataUrl: "../Build/Test2.data",
    frameworkUrl: "../Build/Test2.framework.js",
    codeUrl: "../Build/Test2.wasm",
  });
const Costumize= ()=>{

    return (<>
    <Unity unityContext={unityContext} />
    </>) ;
  }
  export default Costumize;