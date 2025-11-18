### @ Dave Wessels
The main branch of the repo is always the most up-to-date branch. Please refer to this branch when grading our group project. All Markdown files for the different phases can be found in the "Documentation" folder.

# CSCI265
Project for CSCI 265 with Bruce, Gowan, Max, Nabil and Victor

- Bruce is our Documentation lead, 
- Gowan is our design lead and Version control lead, 
- Max is our , 
- Nabil is our Lore and story Lead, 
- Victor is our programming lead

Our Project making a Lore Website with fun minigames

## Branch Strategy and Version Control

- There are several branches that exist.
    - the main branch contains the main stable version of the project.
    - the named branches are meant for each member to make their additions seperatly before adding them to the main branch.

![image not found](Documentation/pics/Version.png)

## Instructions for working within the repo separated by task

### Setup
Clone the repo and enter  the new directory to start working.
```
### Example Commandline Inputs/Steps ###

git clone https://github.com/Majesticats/Its-not-Mappening --branch [developer name]
cd Its-not-Mappening  
```
### Feature done
To merge a finished local branch with the main branch, send a message in the team Discord that you want to make a merge request. Then pull the latest version of the main branch from the remote repo to check that you are up to date. Go to your feature branch and merge the main branch with your local named branch.

Fix any merge conflicts if necessary and commit the fixes.

Push your merged branch to the remote repo. Then go to GitHub and make a merge request to merge your feature branch with the main branch. The Repo manager will check the request and approve it if everything is correct.
```
### Example Commandline Inputs/Steps ###

git pull origin main
git checkout featurename
git status
git merge main
//
~fix merge conflict
git status
git add .
git commit -m "message"
//
~go to GitHub
~make pull request to merge feature with main
~merge approved
~close branch
git pull origin main
```

### Start Testing
To start testing, pull the latest version of the main branch. Go to your local main branch and create a testing branch. Then push the testing branch to the remote repo.
```
### Example Commandline Inputs/Steps ###

git pull origin main
git checkout main
git branch testname
git checkout testname
git push origin testname:testname
```
### Testing update
To make an update to the testing branch, go to your local testing branch and fix any bugs. Then commit the changes to the branch. Push the local branch to the remote repo.
```
### Example Commandline Inputs/Steps ###

git checkout testname
~fix bugs
git status
git add .
git commit -m "message"
git push origin testname:testname
```
### Testing done
If testing is complete, send a Discord message that you are about to update to the next stable version. Then pull the latest version of the main branch. Go to your testing branch and merge the main branch into your testing branch. Push your updated testing branch to the remote repo. Then go to GitHub and make merge requests to merge the testing branch into the main branch. The Repo manager will check the requests and approve them if everything is correct.
```
### Example Commandline Inputs/Steps ###

git pull origin main
git checkout testname
git status
git merge main
git push origin testname:testname
~go to GitHub
~make pull request to merge test with main
~merges approved
~close branch
```
