# Intapp Express: Setup Instructions
#
1. Install Node: https://nodejs.org/en/download/ (With NPM)
2. Install Swagger Globally: "npm install -g swagger"
2. Install needed packages by going to "/Source" and executing "npm install"

# Simple Template Replacement Instructions: 
1. Put Template input.docx in /Templates/ directory
2. Go to the /Source directory
3. Execute: "swagger project start"
4. Execute: "curl -X GET -G http://127.0.0.1:10010/convert -d replacementJson={%22firstname%22:%22Joe%22,%22lastname%22:%22Smith%22} -d templateName=input.docx"