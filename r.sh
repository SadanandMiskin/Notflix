#!/bin/bash

# Set the directory where your JS files are located
API_DIR="./api"

# Check if the directory exists
if [ -d "$API_DIR" ]; then
  # Find and remove all .js files in the API folder
  find "$API_DIR" -type f -name "*.js" -exec rm -f {} \;
  echo "All .js files in the $API_DIR folder have been removed."
else
  echo "The directory $API_DIR does not exist."
fi
