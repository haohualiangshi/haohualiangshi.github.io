hexo generate
cp -R public/* .deploy/storm.github.io
cd .deploy/storm.github.io
git add .
git commit -m “update”
git push origin master