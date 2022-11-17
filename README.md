# pictureminer.web

## Contributing to the picture miner project, follow these steps:

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
  - Confirm that you're making the PR to the dev branch.
  - Click the open pull request button and wait.
  - Add comments where necessary and wait for the PR Leads to check.

- #### Reminder: Constantly update from upstream

  - In the directory of the project on your local machine
  - Open the terminal.
  - Run `git pull upstream dev`
    > This will check for any changes that have been made to the original repository, it will then bring those changes to your local machine and merge (merge) the changes.
