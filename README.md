# Levantamento de Requisitos

## Cadastro de Carro

**RF** => Requisitos Funcionais

- Deve ser possível cadastrar um carro
- Deve ser possível listar todas as categorias

**RN** => Regras de negócios

- Não deve ser possível cadastrar um carro com uma placa já existente
- Não deve ser possível alterar uma placa de um carro já cadastrado
- O carro deve ser cadastrado, por padrão com disponibilidade
- O usuário responsável pelo cadastro deve ser um usuário administrador

## Listagem de carros

**RF** => Requisitos Funcionais

- Deve ser possível listar todos carros disponíveis
- Deve ser possível listar todos carros disponíveis pelo nome da categoria
- Deve ser possível listar todos carros disponíveis pelo nome da marca
- Deve ser possível listar todos carros disponíveis pelo nome do carro

**RN** => Regras de negócios

- O usuário não precisa está logado no sistema

## Cadastro de especificação no carro

**RF** => Requisitos Funcionais

- Deve ser possível cadastrar uma especificação para um carro
- Deve ser possível listar todas as especificações
- Deve ser possível listar todos os carros

**RN** => Regras de negócios

- Não deve ser possível cadastrar uma especificação para um carro não cadastrado
- Não deve ser possível cadastrar uma especificação já existente para um mesmo carro
- O usuário responsável pelo cadastro deve ser um usuário administrador

## Cadastro de imagem do carro

**RF** => Requisitos Funcionais

- Deve ser possível cadastrar a imagem do carro
- Deve ser possível listar todos os carros

**RNF** => Requisitos não funcionais

- Utilizar o multer para upload de arquivos

**RN** => Regras de negócios

- O usuário deve poder cadastrar mais de uma imagem para o mesmo carro
- O usuário responsável pelo cadastro deve ser um usuário administrador

## Aluguel de carro

**RF** => Requisitos Funcionais

- Deve ser possível cadastrar aluguel

**RN** => Regras de negócios

- O aluguel deve ter duração minima de 24 horas.
- Não deve ser possível cadastrar um aluguel caso já exista um aberto para o mesmo usuário
- Não deve ser possível cadastrar um aluguel caso já exista um aberto para o mesmo carro
