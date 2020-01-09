#!/bin/bash

echo "Before appending the file"
cat book.txt

echo "Learning react.js">> book.txt
echo "After appending the file"
cat book.txt