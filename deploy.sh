#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn docs:build

# 将外部README_master.md复制进dist文件夹
cp -rvf docs/.vuepress/README_master.md docs/.vuepress/dist
cp -rvf docs/.vuepress/.gitignore_master docs/.vuepress/dist

# 进入生成的文件夹
cd docs/.vuepress/dist

# 重命名README.md
mv README_master.md README.md
mv .gitignore_master .gitignore

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -v -f git@github.com:felixmundial/felixmundial.github.io.git master
# git push -v -f github.com:felixmundial/felixmundial.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
