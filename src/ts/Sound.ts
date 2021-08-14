
// make a class to deal with the sound in the game
export class Sound {
    private tone: HTMLAudioElement;
    private name: string
    constructor(name: string) {
        this.name = name
        this.tone = new Audio(this.name) 

    }
    public playMusic() {
        this.tone.play();
    }
    public loopPlay() {
        this.tone.play();
        this.tone.loop;
    }
}