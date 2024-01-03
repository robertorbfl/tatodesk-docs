---
sidebar_position: 3
---

# Builder - Chatbot

![Builder](./img/builder.gif)

## Apresentação

Nessa seção você será capaz de escrever e/ou dar manutenção no seu fluxo conversacional do chatbot.

## Funções do SDK
### Envio de textos e multimídias
```
sdk.send.text("seu texto")

sdk.send.image(url)

sdk.send.file(url)

sdk.send.video(url)

sdk.send.audio(url)

sdk.send.link("Texto","Url")
```