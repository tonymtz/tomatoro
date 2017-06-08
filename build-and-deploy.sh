# npm run clean
npm run build
tar -zcvf build.tar.gz build
scp build.tar.gz root@mylist.io:/var/www/html
ssh root@mylist.io 'bash -s' < deploy.sh
rm build.tar.gz
echo 'BUILD & DEPLOY DONE!'
