import { ParticleContainer } from "pixi.js";
import particles = require('pixi-particles');

export class Emitter extends ParticleContainer {
    private pEmitter: particles.Emitter;
    constructor(maxCount: number, props?: any) {
        super(maxCount, props);
        this.pEmitter = new particles.Emitter(this, "assets/img/gold.png"
            ,
            {
                "alpha": {
                    "start": 1,
                    "end": 0.7
                },
                "scale": {
                    "start": 0.2,
                    "end": 0.3,
                    "minimumScaleMultiplier": 2
                },
                "color": {
                    "start": "#ffffff",
                    "end": "#9ff3ff"
                },
                "speed": {
                    "start": 1000,
                    "end": 200,
                    "minimumSpeedMultiplier": 1
                },
                "acceleration": {
                    "x": 0,
                    "y": 10000
                },
                "maxSpeed": 0,
                "startRotation": {
                    "min": 220,
                    "max": 320
                },
                "noRotation": true,
                "rotationSpeed": {
                    "min": 0,
                    "max": 20
                },
                "lifetime": {
                    "min": 0.25,
                    "max": 0.5
                },
                "blendMode": "normal",
                "frequency": 0.001,
                "emitterLifetime": -1,
                "maxParticles": 1000,
                "pos": {
                    "x": 0,
                    "y": 0
                },
                "addAtBack": false,
                "spawnType": "circle",
                "spawnCircle": {
                    "x": -30,
                    "y": 150,
                    "r": 0
                }
            }
        );

    }
    public start(): void {
        this.pEmitter.emit = true;
        // this.particleContainerName.emit  must be true in order to start the functionality of emitting.
    }

    // if you are using a public function then you can call it from other files like index.ts with using "bind". to call it inside the same file,
    // make it private
    public update(delta: number) {
        this.pEmitter.update(delta)
    }



}