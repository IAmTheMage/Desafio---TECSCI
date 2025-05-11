# Usar uma imagem base do PostgreSQL
FROM postgres:15

# Variáveis de ambiente para o banco de dados
ENV POSTGRES_USER=gustavo
ENV POSTGRES_PASSWORD="j026jY)O2<s"
ENV POSTGRES_DB=monitoramento_usina

# Expor a porta padrão do PostgreSQL
EXPOSE 5432
