git branch -D deploy
git branch -D draft
git checkout -b draft
npm run build
git add -f dist
git commit -am "Add deploy file"
git subtree split --prefix dist -b deploy
git push --force upstream deploy:deploy
git checkout master
git branch -D deploy
git branch -D draft