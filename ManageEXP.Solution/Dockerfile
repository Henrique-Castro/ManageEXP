FROM postgres

ENV POSTGRES_PASSWORD root
ENV POSTGRES_USER root
ENV POSTGRES_DB manageExp_core

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




# FROM mcr.microsoft.com/dotnet/core/runtime:3.1
# COPY ManageEXP.Domain/bin/Release/netcoreapp3.1/ManageEXP.Domain.dll app/
# COPY ManageEXP.WebApi/bin/Release/netcoreapp3.1/ManageEXP.WebApi.dll app/
# ENTRYPOINT ["dotnet", "ManageEXP.WebApi.dll"]

# docker build . -t manage-exp-application
# docker run -d -p 8080:80 --name manage-exp-application manage-exp-application