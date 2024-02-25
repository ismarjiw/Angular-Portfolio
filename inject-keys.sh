#!/bin/bash

sed -i "s/EMAILJS_API_KEY/$EMAILJS_API_KEY/g" src/environment.ts
sed -i "s/GITHUB_API_KEY/$GITHUB_API_KEY/g" src/environment.ts
