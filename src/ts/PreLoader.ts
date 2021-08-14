import {
  ILoaderResource,
  Loader,
  
} from 'pixi.js';
import {  setResources } from './Textures';
import { Assets } from './assets';

function addAssets(loader:Loader, assets: {key:string, url:string}[]):void {
  assets.forEach((asset) => {
    loader.add(asset);
  });
}
export type ResourceType = {[key:string]: ILoaderResource };

let progDiv: HTMLDivElement;
function showProgress(e: any) {
  if (progDiv === undefined) {
    progDiv = document.querySelector('.progress') as HTMLDivElement;
    console.log('event ');
  }
  progDiv.style.width = `${e.progress}%`;
}

function loadComplete(
  loader:Loader,
  resources: ResourceType,
  onCompleteCallback:(l:Loader, r: ResourceType)=>void,
): void {
  setResources(resources);
  
  setTimeout(() => {
 // const sprite = new Sprite(getTexture('start') as Texture);
    (<HTMLDivElement>document.querySelector('#bar')).style.visibility = 'hidden';
    (<HTMLDivElement>document.querySelector('#message')).innerHTML = '';
    const preloader = (<HTMLDivElement>document.querySelector('#preloader'));
    const img=document.createElement("img");
    img.src="src/assets/img/baseGame/start.jpg";
    img.width=1280;
    img.height=720;
    preloader.appendChild(img);
    
    preloader.onclick = (e) => {
      console.log('event ', e);
      preloader.style.display = 'none';
      // document.removeChild(preloader);
      onCompleteCallback(loader, resources);
    };
  }, 1000);
}

export function preLoader(
  assetList: Assets,
  callback: (l?:Loader, r?: ResourceType) => void,
): Loader {
  const loader = Loader.shared;
  if (assetList.baseUrl) {
    loader.baseUrl = assetList.baseUrl;
  }
  addAssets(loader, assetList.images);
  loader.onProgress.add(showProgress);
  loader.onComplete.add((l:Loader, res) => {
    console.warn('loader', l, 'res ', res);
    loadComplete(l, res as any, callback);
  });
  loader.load();
  return loader;
}
