import React, { useEffect, useRef } from 'react'
import birdScene from '../assets/3d/bird.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

const Bird = () => {
  const {scene , animations} = useGLTF(birdScene); 
  const birdRef = useRef();
  const {actions} = useAnimations(animations,birdRef)
  
  
  useEffect(() => {
    //adding bird animation
    actions['Take 001'].play();
  },[])

  //modiying the birds position to move around
  useFrame(({clock,camera}) => {
  
      //updated code for making the bird move  realisticly using a sin wave
      birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2 ;
      //check if the bird has reached a certain endpoint relative to the camera
      if(birdRef.current.position.x > camera.position.x + 10){//changes the direction to backwards and rotates the bird 180 degrees on the y axis
        birdRef.current.rotation.y = Math.PI;
      }else if(birdRef.current.position.x < camera.position.x - 10){
        //changes the bird to forward and reset the bird rotation
        birdRef.current.rotation.y = 0;
      }
      //updates the  x and z position based on the direction 
      if(birdRef.current.rotation.y === 0){
        //moving forward
        birdRef.current.position.x += 0.01;
        birdRef.current.position.z -= 0.01;
      }else{
        //moving backward
        birdRef.current.position.x -= 0.01;
        birdRef.current.position.z += 0.01;
      }
    })

  return (
    <mesh ref={birdRef} position={[-5,2,1]} scale={[0.003,0.003,0.003]}>
      <primitive object={scene}/>
    </mesh>
  )
}

export default Bird