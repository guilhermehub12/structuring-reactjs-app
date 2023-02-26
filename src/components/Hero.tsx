import { useState, useRef } from 'react';
import * as types from "../types"

type Props = types.RCProps<{
    library?: string;
}>;

export const Hero = ({ library }: Props) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;

        if (isPlaying) {
            video.pause();
        } else {
            video.play();
        }
        setIsPlaying(!isPlaying);
    };
    return (
        <section className="hero">
            <video ref={videoRef} className="hero-video" autoPlay loop
            >
                <source src="../assets/video.mp4" type="video/mp4" />
                Your browser does not support the video element. Kindly update it to latest version or try another one.
            </video>
            <div className="hero-container">
                <header>
                    <h5 className="hero-label">QAutomatizado <button onClick={togglePlay}>
                        {isPlaying ? 'Pause' : 'Play'}
                    </button></h5>
                    <h2 className="hero-title">
                        Organizando/Configurando Projetos {library}
                    </h2>
                    <h4 className="hero-label">Guilherme Delmiro <a href="https://github.com/guilhermehub12/">(@guilhermehub12)</a></h4>
                    <h4 className="hero-label">Repositório: <a href="https://github.com/guilhermehub12/structuring-reactjs-app">Clique Aqui</a></h4>
                </header>
            </div>
        </section>
    )
}