function Home() {
    return (
        <>
            <div className="bg-[#568ce3] flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vinde!
                        </h2>
                        <p className='text-xl'>
                            Farmacia - Sempre ao seu lado!
                        </p>
                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                Nova Postagem
                            </div>
                        </div>
                    </div>
                        <img 
                            src="https://img.freepik.com/vetores-premium/remedio-farmacia-logotipo-de-saude-medico-herbal-plus-icone-simbolo-de-saude-desenho-vetorial_10135-1110.jpg?w=826" 
                            alt="Imagem da Página Home" 
                            className='w-2/3'
                        />
                    </div>
                </div>
        </>
    )
}

export default Home