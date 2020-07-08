FROM postgres

ENV POSTGRES_PASSWORD root
ENV POSTGRES_USER root
ENV POSTGRES_DB manageExp_core

#FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
#WORKDIR /build
#COPY . .
#RUN dotnet restore
#RUN dotnet publish -c Release -o /app

#FROM mcr.microsoft.com/dotnet/core/sdk:2.2 AS build
#WORKDIR /src
#COPY ["OktaMvcLogin.csproj", "./"]
#RUN dotnet restore "./OktaMvcLogin.csproj"
#COPY . .
#RUN dotnet build "OktaMvcLogin.csproj" -c Release -o /app

# docker build . -t manage-exp-application
# docker run  -p 5432:5432 --name manage-exp-application manage-exp-application