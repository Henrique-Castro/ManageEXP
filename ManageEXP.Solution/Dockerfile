FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build-env
WORKDIR /app

# Copy csproj and restore as distinct layers
COPY ./ManageEXP.WebApi/*.csproj ./
COPY ./ManageEXP.Domain/*.csproj ./
RUN dotnet restore ManageEXP.Domain.csproj
RUN dotnet restore ManageEXP.WebApi.csproj

# Copy everything else and build
COPY . ./
RUN dotnet publish ManageEXP.Solution.sln -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "ManageEXP.WebApi.dll"]

# docker build . -t manage-exp-web-api
# docker run -d -p 8080:80 --name manage-exp-web-api manage-exp-web-api

# Script for database creation if necessary
# FROM postgres

# ENV POSTGRES_PASSWORD root
# ENV POSTGRES_USER root
# ENV POSTGRES_DB manageExp_database