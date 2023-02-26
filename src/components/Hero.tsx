import * as types from "../types"

type Props = types.RCProps<{
    library?: string;
}>;

export const Hero = ({ library }: Props) => {
    return (
        <section className="hero">
            <video className="hero-video" autoPlay={true} loop={true}
            >
                <source src="../assets/video.mp4" type="video/mp4" />
                Your browser does not support the video element. Kindly update it to latest version or try another one.
            </video>
            <div className="hero-container">
                <header>
                    <h5 className="hero-label">QAutomatizado</h5>
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