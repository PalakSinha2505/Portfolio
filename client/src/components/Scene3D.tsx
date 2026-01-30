import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Octahedron, Box } from '@react-three/drei';
import * as THREE from 'three';

function FloatingGeometry({ position, color, speed = 1, distort = 0.3, scale = 1 }: {
  position: [number, number, number];
  color: string;
  speed?: number;
  distort?: number;
  scale?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.6}
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function FloatingSphere({ position, color, scale = 0.5 }: {
  position: [number, number, number];
  color: string;
  scale?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <Sphere ref={meshRef} position={position} scale={scale} args={[1, 32, 32]}>
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.4}
          distort={0.4}
          speed={3}
          roughness={0.1}
          metalness={0.9}
        />
      </Sphere>
    </Float>
  );
}

function FloatingTorus({ position, color, scale = 0.6 }: {
  position: [number, number, number];
  color: string;
  scale?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={2} floatIntensity={1}>
      <Torus ref={meshRef} position={position} scale={scale} args={[1, 0.3, 16, 32]}>
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.5}
          roughness={0.3}
          metalness={0.7}
        />
      </Torus>
    </Float>
  );
}

function FloatingBox({ position, color, scale = 0.4 }: {
  position: [number, number, number];
  color: string;
  scale?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={1.5} floatIntensity={2}>
      <Box ref={meshRef} position={position} scale={scale} args={[1, 1, 1]}>
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.45}
          roughness={0.2}
          metalness={0.8}
        />
      </Box>
    </Float>
  );
}

function Particles() {
  const count = 100;
  const particlesRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#8b5cf6"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} color="#8b5cf6" />
      <directionalLight position={[-10, -10, -5]} intensity={0.3} color="#3b82f6" />
      <pointLight position={[0, 0, 5]} intensity={0.5} color="#a855f7" />

      <FloatingGeometry position={[-3, 2, -2]} color="#8b5cf6" speed={0.8} scale={0.8} />
      <FloatingGeometry position={[3.5, -1, -3]} color="#3b82f6" speed={1.2} scale={0.6} />
      <FloatingGeometry position={[-2, -2, -4]} color="#a855f7" speed={0.6} scale={0.5} />
      
      <FloatingSphere position={[4, 2, -2]} color="#6366f1" scale={0.4} />
      <FloatingSphere position={[-4, 0, -3]} color="#8b5cf6" scale={0.3} />
      <FloatingSphere position={[0, 3, -4]} color="#3b82f6" scale={0.35} />
      
      <FloatingTorus position={[2, -2, -2]} color="#a855f7" scale={0.5} />
      <FloatingTorus position={[-3, 1, -5]} color="#6366f1" scale={0.4} />
      
      <FloatingBox position={[3, 1, -4]} color="#8b5cf6" scale={0.35} />
      <FloatingBox position={[-1, -3, -3]} color="#3b82f6" scale={0.3} />
      
      <Particles />
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
    </div>
  );
}
