import React, {Suspense, useState} from 'react';
import { Canvas} from '@react-three/fiber'
import Loader from '../components/Loader';
import Island  from '../models/island';
import Sky from '../models/sky';
import Bird from '../models/bird';
import Plane from '../models/plane';
import { Camera } from 'three';
import HomeInfo from '../components/HomeInfo';

const Home = () => {

  const[isRotating, setIsRotating] = useState(false);

  const [currentStage,setCurrentStage] = useState(1);


//we would want to make this website fitr well on all devices
  const adjustIslandForScreenSize = () => {
    let screenScale = null;// scaling property
    let screenPosition = [0,-6.5,-40];//screen position property
    let islandRotation = [0.1,4.7,0]; //rotation property



    if(window.innerWidth < 768){
      //setting the screen settings for a screen smaller than a mobile phone
      screenScale = [0.9,0.9,0.9]; 
    }else{
      screenScale = [1,1,1]; 
    }
    return [screenScale,screenPosition,islandRotation]
  }


  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if(window.innerWidth < 768){
      screenScale = [1.5,1.5,1.5]; 
      screenPosition = [0,-1.5,0];
    }else{
      screenScale = [3,3,3]; 
      screenPosition = [0,-4,-4];
    }
    return [screenScale,screenPosition,islandRotation]
  }

  //calling the screen resizing function
  const [islandScale,islandPosition,islandRotation] = adjustIslandForScreenSize();//we can pass down the compone ts in the island self closing tag as props
  const [planeScale,planePosition] = adjustPlaneForScreenSize();


  return (
    
    <section className='w-full h-screen relative'>

    <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center' >
      {currentStage && <HomeInfo currentStage={currentStage}/>}
    </div>









      <Canvas camera={{near: 0.1, far: 1000}}
       className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
       >
        <Suspense fallback = {<Loader />}>
          <directionalLight position={[10,1,1]} intensity={2}/>
          <ambientLight intensity={0.5}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
          //passing the properties as props
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            scale={planeScale}
            position={planePosition}
            isRotating={isRotating}
            rotation={[0,20,0]}
            
          />

        </Suspense>

      </Canvas>
    </section>
  )
}

export default Home