## Git Hidden Folder

There is a hidden folder called `.git` whitch tells your that our project is a git repo.

If we wanted to create a git repo in a new project we' create the folder and then initialize that repo using `git init`

```
mkdir /workspaces/tmp/new-project
cd /workspaces/tmp/new-project
git init
touch Readme.md
code Readme.md
git status
git add Readme.md
# makes changes to Readme.md
git commit -a -m "add readme file"
```

## Cloning

We can clone three ways: HTTPS, SSH, GitHub CLI

Since we are using GitHub Codespaces we will create temporary directory in our workspace

```sh
mkdir /workspace/tmp
cd /workspace/tmp
```

### HTTPS

```sh
git clone https://github.com/btrejos/Github-Examples.git
cd Github-Examples
```
> You'll to generate a Personal Access Token (PAT)
https://github.com/settings/personal-access-tokens

You will use the PAT as your password when you login

- Give it access to Contents for Commits

### SSH

```ssh
git clone git@github.com:btrejos/Github-Examples.git
cd Github-Examples
```

#### Generate SSH Key

##### Step 1: Check if you already have a key
Run:

```bash
ls -al ~/.ssh
```

If you see:
```
id_ed25519
id_ed25519.pub
```
You already have a key.

If not → we generate one.

##### Step 2: Generate SSH Key (if none exists)

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

Press Enter for all prompts (default location is correct).

This creates:
```
~/.ssh/id_ed25519
~/.ssh/id_ed25519.pub
```

##### Step 3: Start SSH Agent

```bash
eval "$(ssh-agent -s)"
```

Then add the key:

```bash
ssh-add ~/.ssh/id_ed25519
```

If it says:

```
Identity added
```

Perfect

##### Step 4: Copy Public Key

```bash
cat ~/.ssh/id_ed25519.pub
```

Copy the entire output (starts with ssh-ed25519).

##### Step 5: Add Key in GitHub

Go to:

GitHub → Settings → SSH and GPG Keys → New SSH Key

- Title: My Laptop
- Key: paste what you copied
- Save

##### Step 6: Test connection
```bash
ssh -T git@github.com
```

Expected result:
```
Hi <your-username>! You've successfully authenticated...
```

### GitHub CLI

Install the CLI for windows or your specific environment

https://cli.github.com/

```
gh auth login
gh repo clone btrejos/Github-Examples
```




## Commits

When we want to commit code we can write git commit which will open up the commit edti message in the editor of choice,

```sh
git commit
```

Set the global editor
```
git config --global core.editor emacs
```

Make a commit and commit message without opening editor
```sh
git commit -m "add another exclamation
```

## Branches

List of branches
```
git branch
```

Create a new branch
```
git branch dev
```

Checkout the branch
```
git checkout dev
```

## Remotes

We can add remote but often you will just add remote via upstream adding a branch

```sh
git remote add ...
git branch -u origin new-feature
```

## Stashing
```
git stash list
git stash
git stash save my-name
git stash apply
git stash pop
```

## Merging

```
git checkout dev
git merge main
```

## Add

When we want to stage changes that will be included in the commit.
We can use the . to add all possible files.

```
git add Readme.md
git add .
```

## Reset

Reset allows you to move Staged changes to be Unstaged.
This is useful when you revert all files not to be not commited

```
git add .
git reset
```
> git reset will revert a git add .

## Status

Git status shows you what files will or will not bet commited.

```
git status
```

## Gitconfig file

The gitconfig file is what stores your global configurations for git such as email, editr and more.

Showing the contents of our .gitconfig file
```
git config --list
```

When your first install git on a machine you are suppose to set up your name and email

```sh
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

## Log

`git log` will show recent git commit to the git tree

## Push
When we want to push a repo to our remote origin

```
git push
```