#!/usr/bin/env sh

set -o nounset \
    -o errexit \
    -o verbose \
    -o xtrace


# Set environment values if they exist as arguments
if [ $# -ne 0 ]; then
  echo "===> Overriding env params with args ..."
  for var in "$@"
  do
    export "$var"
    echo $var
    echo "$var"
  done
fi

echo "===> Building ..."
yarn build

echo "===> Running ... "
exec serve -s build -l 3000
