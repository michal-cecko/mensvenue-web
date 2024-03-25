rm -rf $WEB_DIR
rm -rf $APP_DIR
git clone git@bitbucket.org:elvinka/mensvenue.git $APP_DIR
cd $APP_DIR
npm install
npm run generate
cp -r dist ../web