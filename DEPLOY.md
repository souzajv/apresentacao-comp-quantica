# Publicação na Vercel

Esta pasta é uma apresentação estática: não há instalação de dependências nem etapa de build.

## Pelo painel da Vercel

1. Importe o repositório que contém esta pasta.
2. Se o repositório contiver apenas esta apresentação, mantenha a raiz (`./`) como **Root Directory**. Se ela estiver em um repositório maior, selecione `apresentacao`.
3. Use **Other** como framework e deixe os comandos de instalação e build vazios.
4. Publique e abra o endereço gerado para conferir os slides e as animações.

## Pela CLI

Em um terminal autenticado na Vercel, execute `vercel` dentro desta pasta para criar uma prévia. Após revisá-la, execute `vercel --prod` para publicar em produção.

Os dez slides, o player SVG e as sete animações estão incluídos nesta pasta e funcionam sem internet. Abra `index.html` no navegador ou use a versão publicada. Mantenha `assets/`, `vendor/` e os arquivos CSS/JS ao lado do HTML. A navegação ao vivo na plataforma precisa de internet.

Use setas para navegar, F para tela cheia e S para abrir as notas com cronômetro. `ROTEIRO.md` distribui os 10 minutos entre os slides e a demonstração. `perguntas.html` contém os instrumentos completos e `apoio.html` traz capturas para consulta ou falha de conexão.

As animações de Christine Somkunwar permanecem sob a Lottie Simple License. O player lottie-web 5.13.0 usa a licença MIT, incluída em `vendor/LICENSE-lottie-web.md`. A licença do runtime HTML PPT Studio está em `LICENSE-html-ppt.txt`. Consulte `CREDITOS.md` para as fontes.
