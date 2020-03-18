# Sample NodeJS Backend

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository. Backend will expose 2 endpoints `/cats` and `/`.

## Endpoints Description
> GET /: Returning server info

> GET /cats: Returns a list of cats. Supported query params offset and limit for pagination

> GET /cats/{id}: Returns cat by id

> POST /cats: Create a cat in database. Followed by CatDTO

```typescript
export class CatDTO {
  kind: string; // British Shorthair
  image: string; // Link to Image
  fact: string; // Fun fact about the cat
}
```



## Deployment Steps

> The API backend exposes port 3000 so make sure EC2 security group is configured accordingly

Install Node on EC2 VM
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

Activate Node Version Manager
```bash
. ~/.nvm/nvm.sh
```

Install Node to the environment
```bash
nvm install node
```
Verify if Node is installed
```bash
node -v
```
Install yarn
```bash
# Use this
npm install -g yarn
# Or
curl -o- -L https://yarnpkg.com/install.sh | bash
```
Install Git
```bash
# Perform a quick update on your instance:
$ sudo yum update -y

# Install git in your EC2 instance
sudo yum install git -y
```
Clone the repo
```bash
git clone https://github.com/vicecarloans/AWS-NestJS
```
After cloning the repo, go inside the folder and install dependencies
```bash
cd AWS-NestJS && yarn
```
Add Environment Variables
```bash
# Copy Environment Variables Manifest
cp .env.example .env
```
Update Environment Variables with correct info
```bash
vi .env
```
Build Application
```bash
yarn build
```
Run of Production Mode
```bash
yarn start:prod
```

