function Home() {
    return (
        <>
            <div style={{
                width: "100vw",
                display: "flex",
                justifyContent: "center"
            }}>
                <div>
                    <div style={{
                         width: "80vw",
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center"
                    }}>
                        <h1>Farmacia - sempre ao seu lado!</h1>
                    </div>

                    <div style={{
                         width: "80vw",
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center"
                    }}>
                        <img 
                            src="https://img.freepik.com/vetores-premium/remedio-farmacia-logotipo-de-saude-medico-herbal-plus-icone-simbolo-de-saude-desenho-vetorial_10135-1110.jpg?w=826" 
                            alt="Imagem da Página Home" 
                            width="400px"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home