import FAQScreen from '../src/screens/FAQScreen';

export default FAQScreen; 

// SSG - Static Server Generation
// SSR - Server Side Render
// ISG - Incremental Static Generation

/*
 O ponto forte do SSG é a entrega rápida de conteúdos estáticos, 
 então ele é a melhor estratégia para a página inicial. 
 Com o SSR, você poderá construir um painel de controle personalizado 
 e atualizado para cada requisição.
*/

// export async function getStaticProps() {
/* Server apenas para sites estáticos e conteúdo nunca será alterado, 
apenas quando gerar outra build. Roda somente em build time. Em modo DEV, 
sempre irá rodar a cada acesso
*/

// export async function getServerSideProps() {
// Roda a cada acesso que a aplicação receber
// Em modo DEV, sempre irá rodar a cada acesso

export async function getStaticProps() {
    console.log('Em modo DEV, sempre roda! A cada acesso')
    console.log('Roda SOMENTE em build time')
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
    const faq = await fetch(FAQ_API_URL)
        .then((respostaDoServidor) => {
            return respostaDoServidor.json();
        })
        .then((resposta) => {
            return resposta;
        });

    return {
      props: {
          qualquercoisa: 'que eu passar aqui',
          faq,
      },
    };
}  