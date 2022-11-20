# pictureminer.web

## Contributing to the picture miner project, follow these steps

- #### Step-1: Clone the dev Repository on your Local Machine

  - run `git clone https://github.com/workshopapps/pictureminer.web`.

- #### Step-2: Configure the upstream

  - go to your local machine terminal, in the project folder
  - run `git remote add upstream https://github.com/workshopapps/pictureminer.web`
  - run `git pull upstream dev`

- #### Step-3: Create a new branch

  - First, create a branch with the feat prefixing the name of the feature you are to implement.
  - For example, do this by running `git checkout -b feat/Account-Setup`

- #### Step-4: Commit and push your changes

  - Make your changes.
  - Add the changes using `git add .` or any one that serves your needs.
  - Add concise commit messages, referencing your issue number with a close action.
    > e.g `git commit -m "adds signup button to the sign up page"`
  - run `git push origin [name of the repo you created]`
    > For the example above, you run
    >
    > `git push origin feat/Account-Setup`

- #### Step-5: Opening Pull requests

  To open a pull request, immediately after the last step (committing your changes with push):

  - You will see the option to open a pull request.
  - Give your PR a title.
  - Explain what your changes does, adding images and proof (test) if needed.
  - Click the open pull request button and wait.
  - Add comments where necessary and wait for the PR Leads to check.
  - Confirm that you're making the PR to the dev branch.
    > e.g. ![](./assets/PR.png)

- #### Reminder: Constantly update from upstream

  - In the directory of the project on your local machine
  - Open the terminal.
  - Run `git pull upstream dev`
    > This will check for any changes that have been made to the original repository, it will then bring those changes to your local machine and merge (merge) the changes.

# Code Formatting

The following code formatting conventions are used in this document:
Eslint: [eslint](https://eslint.org/)
Prettier: [prettier](https://prettier.io/)

## Getting Started

**Note** If you have already checkout from dev branch and you have not installed the dependencies, run the following command:

    git pull origin dev
    npm install

The command should install all the dependencies for you.

**Note :** The code in the dev branch has already been formatted using prettier and eslint. Thus you might have some merge conflicts if you have not formatted your code using prettier and eslint.

## Formatting Code

To format your code, run the following command:

    npm run format

## Linting Code

To lint your code, run the following command:

    npm run lint

## Linting and Formatting Code

To lint and format your code, run the following command:

    npm run lint:fix

If you are using VSCode, you can install the following extensions to format and lint your code automatically:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

After installing the extension, if you have linting errors, you will see a red underline under the error. You can hover over the error to see the error message. You can also see the error message in the Problems tab.

You can fix the error by running Ctrl + Shift + P and typing "ESLint: Fix all auto-fixable problems". This will fix all the auto-fixable errors.

## Committing Code

To commit your code, run the following command:

    git add .
    git commit -m "your commit message"

Husky will run the lint and format scripts before you commit your code. If there are any linting errors, you will not be able to commit your code. You will have to fix the linting errors before you can commit your code.


## Building Docker Image
Stop the running app and build docker image:
    docker build -t <image-name> .
    
## View Built Image
    docker image ls

## Run Docker Image
    docker run -p port:port <image-name>
# Check the output at http://localhost:port/ or http://0.0.0.0:port/ or http://127.0.0.1:port/

## Check running containers
    docker ps
  
# Stop the container.

## Tag locally before pushing to the Dockerhub

    docker tag <image-name> <dockerhub-username>/<docker-image:version-number>

## Push Image
    docker login

    docker push <dockerhub-username>/<docker-image:version-number>
  
# Check the image in your Dockerhub online at https://hub.docker.com/repository/docker/
